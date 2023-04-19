// Emotion board component
import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { saveComment } from "../reducers/user";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { saveCommentToday, changeComment } from "../reducers/journal";

const BACKEND = "https://howareyouapp-backend.vercel.app/";

export default function Notepad() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  // console.log(user.comment)
  const journal = useSelector((state) => state.journal.value);
  console.log(journal);
  const [comment, setComment] = useState(""); // Champ input de rédaction du commentaire
  const [registerComment, setRegisterComment] = useState(false); // commentaire complet avec ID

  // Enregistrer le commentaire en BDD
  const addComment = () => {
    fetch(`${BACKEND}/comments/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: user.token, content: comment }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("comment => ", data.comment);
        if (data.result) {
          dispatch(saveComment(comment)); // user
          setRegisterComment(data.comment);
          alert("Votre commentaire a bien été enregistré 💖.");
          dispatch(saveCommentToday(true)); // journal
          dispatch(
            changeComment({ modifiedComment: false, savedComment: true })
          );
          // setRegisterComment(true);
        }
      });
  };

  // Le notepad initial
  let notepad = (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Pourquoi ?</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={3}
          placeholder="Explique-nous ^^..."
          value={comment}
          onChangeText={(value) => setComment(value)}
        />
      </View>
      <TouchableOpacity style={styles.saveComment} onPress={() => addComment()}>
        <Text style={styles.saveText}>Enregistrer</Text>
        <FontAwesome name="check" style={styles.saveIcon} size={18} />
      </TouchableOpacity>
    </>
  );

  const handleUpdated = () => {
    console.log("changement");
    dispatch(changeComment({ modifiedComment: true, savedComment: false }));
  };

  const handleUpdateComment = () => {
    fetch(`${BACKEND}/comments/new`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        commentId: registerComment._id,
        token: user.token,
        content: comment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("comment => ", data);
        if (data.result) {
          dispatch(saveComment(comment)); // reducer user
          setRegisterComment(data.comment);
          alert("Votre commentaire a bien été modifié 💖.");
          dispatch(
            changeComment({ savedComment: true, modifiedComment: true })
          ); // reducer journal
          // setRegisterComment(true);
        }
      });
  };

  const deleteComment = () => {
    fetch(`${BACKEND}/comments/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        commentId: registerComment._id,
        token: user.token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Commentaire bien supprimé 🤧");
        dispatch(saveCommentToday(false)); // journal
        setComment("");
      });
  };

  // Changement affichage quand commentaire enregistré
  if (journal.savedComment) {
    notepad = (
      <>
        <View style={styles.inputSaved}>
          <Text style={styles.labelSaved}>Ce que tu as écrit</Text>
          <Text style={styles.commentText}>{comment}</Text>
        </View>

        <View style={styles.editButtons}>
          <TouchableOpacity
            style={styles.changeComment}
            onPress={() => handleUpdated()}
          >
            <FontAwesome name="pencil" style={styles.changeIcon} size={15} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.changeComment}
            onPress={() => deleteComment()}
          >
            <FontAwesome name="remove" style={styles.changeIcon} size={15} />
          </TouchableOpacity>
        </View>
      </>
    );
  }

  // RETURN => rendu final
  return <>{notepad}</>;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  emotionBoard: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
    width: "95%",
  },
  emotion: {
    margin: 5,
    height: 40,
    width: 50,
    objectFit: "contain",
  },
  moreEmotions: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: "#E9EBFC",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  inputContainer: {
    position: "relative",
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  label: {
    position: "absolute",
    top: -10,
    left: 50,
    backgroundColor: "white",
    color: "#5B3EAE",
    zIndex: 10,
    paddingHorizontal: 5,
    fontFamily: "DM-Sans-Regular",
  },
  commentText: {
    fontFamily: "DM-Sans-Regular",
  },
  input: {
    width: "80%",
    height: 70,
    borderColor: "#5B3EAE",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "DM-Sans-Regular",
  },
  saveComment: {
    backgroundColor: "#5B3EAE",
    borderWidth: 1,
    borderColor: "#5B3EAE",
    borderRadius: 25,
    height: 40,
    width: "60%",
    paddingTop: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "DM-Sans-Regular",
  },
  saveText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    fontFamily: "DM-Sans-Bold",
  },
  saveIcon: {
    color: "#FFFFFF",
    marginLeft: 10,
    marginTop: 2,
  },

  // Commentaire enregistré
  labelSaved: {
    textAlign: "center",
    color: "#252525",
    paddingHorizontal: 5,
    fontSize: 16,
    fontFamily: "DM-Sans-Bold",
    marginVertical: 10,
  },
  inputSaved: {
    marginTop: 15,
    width: "80%",
    minHeight: 70,
    backgroundColor: "#E9EBFC",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  // Les boutons pour changer/supprimer commentaire
  editButtons: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginTop: -15,
  },
  changeComment: {
    backgroundColor: "#5B3EAE",
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  changeIcon: {
    color: "white",
  },

  //Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 50, 0.4)",
  },
  modalView: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

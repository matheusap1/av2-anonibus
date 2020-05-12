const functions = require('firebase-functions');

const admin = require('firebase-admin');

const path = require('path');

// let serviceAccount = require("../keys/av2-anonibus-firebase-adminsdk-ute7r-218337403a.json");

//admin.initializeApp({
//    credential: admin.credential.cert(serviceAccount),
//    databaseURL: "https://av2-anonibus.firebaseio.com"
//});

admin.initializeApp();

let db = admin.firestore();

exports.enviarMensagem = functions.https
.onRequest((request, response)=>{
   let queryRef = db.collection('chats').doc('sala_01')
    .collection('mensagens').doc();

    queryRef.set({
        mensagem: request.body.mensagem,
        usuario: request.body.usuario,
        avatar: request.body.avatar,
    }).then(function(){
        response.json({
            "ok": true
        })
    })
    .catch(function(){
        response.json({
            "error": true
        })
    })    
})

exports.imageUpdateFirestore = functions.storage.object().onFinalize(async (object) => {
  const filePath = object.name;
  const fileName = path.basename(filePath);

  await db.collection('imagens').doc(fileName).set(object);

  console.log(fileName, object)

  return
})
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:get/get.dart';
import 'package:scorplingua/wrapper.dart';

class Forgot extends StatefulWidget {
  const Forgot({super.key});

  @override
  State<Forgot> createState() => _ForgotState();
}

class _ForgotState extends State<Forgot> {
  TextEditingController email = TextEditingController();
  sendEmail() async {
    await FirebaseAuth.instance.sendPasswordResetEmail(email: email.text);
    Get.offAll(Wrapper());
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Olvidaste la contraseña"),
        ),
        body: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Column(
            children: [
              TextField(
                controller: email,
                decoration: InputDecoration(
                    hintText: "Ingresa tu correo y vemos que podemos hacer"),
              ),
              ElevatedButton(
                  onPressed: (() => sendEmail()),
                  child: Text("Manda un mensaje a tu correo"))
            ],
          ),
        ));
  }
}

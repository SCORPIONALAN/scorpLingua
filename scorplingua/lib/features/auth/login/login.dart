import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:scorplingua/core/config/backend.dart';
import 'package:scorplingua/features/auth/forgot_password/forgot.dart';
import 'package:scorplingua/features/auth/signup/signup.dart';

class Login extends StatefulWidget {
  const Login({super.key});

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  TextEditingController email = TextEditingController();
  TextEditingController password = TextEditingController();
  bool isloading = false;
  signIn() async {
    final trimmedEmail = email.text.trim();
    final trimmedPassword = password.text.trim();

    if (trimmedEmail.isEmpty || trimmedPassword.isEmpty) {
      Get.snackbar("Campos vacíos", "Por favor completa todos los campos");
      return;
    }

    final emailRegex = RegExp(r"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$");
    if (!emailRegex.hasMatch(trimmedEmail)) {
      Get.snackbar("Correo inválido", "Introduce un correo válido");
      return;
    }

    setState(() {
      isloading = true;
    });

    try {
      await FirebaseAuth.instance.signInWithEmailAndPassword(
        email: trimmedEmail,
        password: trimmedPassword,
      );
      User? user = FirebaseAuth.instance.currentUser;
      if (user != null) {
        String? idToken = await user.getIdToken();
        await sendTokenToBackend(idToken!);
      }
    } on FirebaseAuthException catch (e) {
      Get.snackbar("Mensaje de error", e.message ?? e.code);
    } catch (e) {
      Get.snackbar("Error desconocido", e.toString());
    } finally {
      setState(() {
        isloading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return isloading
        ? Center(
            child: CircularProgressIndicator(),
          )
        : Scaffold(
            appBar: AppBar(title: Text("Pagina de login")),
            body: Padding(
              padding: const EdgeInsets.all(10.0),
              child: Column(
                children: [
                  TextField(
                    controller: email,
                    decoration: InputDecoration(
                        hintText: "Ingresa tu correo electronico"),
                  ),
                  TextField(
                    controller: password,
                    decoration: InputDecoration(
                        hintText: "Ingresa aqui tu contraseña!"),
                  ),
                  ElevatedButton(
                      onPressed: (() => signIn()),
                      child: Text("Inicia Sesion")),
                  SizedBox(
                    height: 60,
                  ),
                  ElevatedButton(
                      onPressed: (() => Get.to(Signup())),
                      child: Text("No tienes cuenta? Unetenos!")),
                  ElevatedButton(
                      onPressed: (() => Get.to(Forgot())),
                      child: Text("Olvidaste la contraseña?"))
                ],
              ),
            ),
          );
  }
}

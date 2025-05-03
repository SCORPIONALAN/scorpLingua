import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:scorplingua/wrapper.dart';

class Signup extends StatefulWidget {
  const Signup({super.key});

  @override
  State<Signup> createState() => _SignupState();
}

class _SignupState extends State<Signup> {
  TextEditingController email = TextEditingController();
  TextEditingController password = TextEditingController();
  TextEditingController password2 = TextEditingController();
  bool isLoading = false;

  signUp() async {
    final trimmedEmail = email.text.trim();
    final trimmedPassword = password.text.trim();
    final trimmedPassword2 = password2.text.trim();

    if (trimmedEmail.isEmpty ||
        trimmedPassword.isEmpty ||
        trimmedPassword2.isEmpty) {
      Get.snackbar("Campos requeridos", "Por favor completa todos los campos");
      return;
    }

    final emailRegex = RegExp(r"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$");
    if (!emailRegex.hasMatch(trimmedEmail)) {
      Get.snackbar("Correo inválido", "Por favor ingresa un correo válido");
      return;
    }

    if (trimmedPassword != trimmedPassword2) {
      Get.snackbar("Contraseña", "Las contraseñas no coinciden");
      return;
    }

    if (trimmedPassword.length < 6) {
      Get.snackbar("Contraseña", "Debe tener al menos 6 caracteres");
      return;
    }

    setState(() {
      isLoading = true;
    });

    try {
      await FirebaseAuth.instance.createUserWithEmailAndPassword(
        email: trimmedEmail,
        password: trimmedPassword,
      );
      Get.offAll(Wrapper());
    } on FirebaseAuthException catch (e) {
      Get.snackbar("Error al registrar", e.message ?? "Error desconocido");
    } catch (e) {
      Get.snackbar("Error inesperado", e.toString());
    } finally {
      setState(() {
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return isLoading
        ? const Center(child: CircularProgressIndicator())
        : Scaffold(
            appBar:
                AppBar(title: const Text("Únete a nuestra hermosa comunidad")),
            body: Padding(
              padding: const EdgeInsets.all(20.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  TextField(
                    controller: email,
                    decoration:
                        const InputDecoration(hintText: "Ingresa Email"),
                  ),
                  TextField(
                    controller: password,
                    obscureText: true,
                    decoration: const InputDecoration(
                        hintText: "Ingresa tu contraseña"),
                  ),
                  TextField(
                    controller: password2,
                    obscureText: true,
                    decoration:
                        const InputDecoration(hintText: "Repite la contraseña"),
                  ),
                  const SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: signUp,
                    child: const Text("Únete a nuestra maravillosa comunidad"),
                  ),
                ],
              ),
            ),
          );
  }
}

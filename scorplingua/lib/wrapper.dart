import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:scorplingua/features/auth/login/login.dart';
import 'package:scorplingua/screens/home_screen.dart';
import 'package:scorplingua/features/auth/verify_email/verifyEmail.dart';

class Wrapper extends StatefulWidget {
  const Wrapper({super.key});

  @override
  State<Wrapper> createState() => _WrapperState();
}

class _WrapperState extends State<Wrapper> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: StreamBuilder(
          stream: FirebaseAuth.instance.authStateChanges(),
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              if (snapshot.data!.emailVerified) {
                return HomePage();
              } else {
                return Verifyemail();
              }
            } else {
              return Login();
            }
          }),
    );
  }
}

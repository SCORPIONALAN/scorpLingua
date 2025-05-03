import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:scorplingua/core/config/firebase_options.dart';
import 'package:scorplingua/wrapper.dart';
import 'package:get/get.dart';
import 'core/theme/app_theme.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Mi App Universitaria',
      theme: AppTheme.darkTheme,
      home: Wrapper(), // Reemplaza con tu pantalla inicial
    );
  }
}

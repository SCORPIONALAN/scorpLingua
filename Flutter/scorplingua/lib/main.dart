import 'package:flutter/material.dart';
import 'app/themes/app.theme.dart';

void main() {
  runApp(const scorpLinguaApp());
}

class scorpLinguaApp extends StatelessWidget {
  const scorpLinguaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'scorpLingua',
      theme: AppTheme.darkTheme,
      home: const Placeholder(),
    );
  }
}

import 'package:http/http.dart' as http;

Future<void> sendTokenToBackend(String token) async {
  const backendUrl =
      "http://192.168.100.39:3000/api/check-auth"; // o tu IP LAN real

  final response = await http.get(
    Uri.parse(backendUrl),
    headers: {
      'Authorization': 'Bearer $token',
    },
  );

  if (response.statusCode == 200) {
    print("Autenticado correctamente con el backend: ${response.body}");
  } else {
    print("Error de autenticación: ${response.body}");
  }
}

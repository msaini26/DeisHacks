final FirebaseDatabase database = FirebaseDatabase.getInstance();
DatabaseReference ref = database.getReference("server/saving-data/fireblog");

public static class User {

  public String date_of_birth;
  public String full_name;
  public String nickname;

  public User(String dateOfBirth, String fullName) {
    // ...
  }

  public User(String dateOfBirth, String fullName, String nickname) {
    // ...
  }

}

DatabaseReference usersRef = ref.child("users");

Map<String, User> users = new HashMap<>();
users.put("alanisawesome", new User("June 23, 1912", "Alan Turing"));
users.put("gracehop", new User("December 9, 1906", "Grace Hopper"));

usersRef.setValueAsync(users);


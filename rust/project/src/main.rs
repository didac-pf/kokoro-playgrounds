use std::env;

fn main() {
  println!("\n--------------------------------");
  println!("Hello, world!");
  println!("--------------------------------\n");

  match env::var("EXAMPLE_VAR") {
    Ok(v) => println!("Environment variable value: {v}"),
    Err(e) => println!("Error: {e}"),
  }

}

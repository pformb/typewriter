const typeWriter = (string) => {
  let delay = 0; // Initialize the delay

  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);

      // Check if the character is the last one in the string
      if (char === string[string.length - 1]) {
        // Schedule the newline character after all characters are printed
        setTimeout(() => {
          process.stdout.write('\n');
        }, delay);
      }
    }, delay);

    // Increase the delay for the next character
    delay += 50; // You can adjust the delay
  }
}

typeWriter("hello there from lighthouse labs");

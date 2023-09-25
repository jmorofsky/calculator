# Calculator

A simple 4-function web application calculator.

![image](https://github.com/jmorofsky/calculator/assets/80358703/932bc33d-9bd4-4840-8442-8f99757f638a)

### Development

Designed and developed entirely by me, Jason Morofsky.

The app was created using React.

The current value is saved in state. All the buttons update the state, adding their modifiers to the current value. When the user presses enter, the modifiers are parsed and the final result is calculated and shown as the new current value.

The most difficult part of designing this calculator was finding a monospace font which could perfectly align with the shadow "8's" in the background of the display. I had to modify the decimal point to be exactly as wide as the other characters to achieve this goal.

### Installation

To create a working build on your local machine, first clone the repository to your device.

    git clone https://github.com/jmorofsky/calculator

Navigate to the repository.

    cd calculator
    
Install dependencies.

    npm i
    
Start the development server.

    npm start
    
By default, the dev server is located on port 3000. You can access this server by typing

    localhost:3000
    
into your desired web browser.

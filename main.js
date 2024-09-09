import { TextInterface } from "text-interface";
let ti = new TextInterface();

var playGame = true;
while (playGame == true) {
  ti.output("Pick a number between 1 and 8");
  ti.output("Is your number 4?");
  let Answer = await ti.readChoice(["Yes", "Higher", "Lower"]);
  ti.clear();
  //James H helped with figuring out the syntax for readChoice
  ti.output(Answer);
  if (Answer == "Yes") {
    ti.output("hooray!");
  }
  if (Answer == "Higher") {
    ti.output("is your number 6?");
    let Answer = await ti.readChoice(["Yes", "Higher", "Lower"]);
    ti.clear();
    if (Answer == "Yes") {
      ti.output("hooray!");
    }
    if (Answer == "Higher") {
      ti.output("is your number 7?");
      let Answer = await ti.readChoice(["Yes", "Higher"]);
      ti.clear();
      if (Answer == "Yes") {
        ti.output("hooray!");
        if (Answer == "Higher") {
          ti.output("Your number is 8!");
        }
      }
    }
    if (Answer == "Lower") {
      ti.output("Your number is 5!");
    }
  }
  if (Answer == "Lower") {
    ti.output("is your number 2?");
    let Answer = await ti.readChoice(["Yes", "Higher", "Lower"]);
    if (Answer == "Yes") {
      ti.output("Hooray!");
    }
    if (Answer == "Higher") {
      ti.output("Your number is 3!");
    }
    if (Answer == "Lower") {
      ti.output("Your number is 1!");
    }
  }
  ti.output("Do you want to play again?");
  var playGame = await ti.readYesOrNo();
  ti.clear();
}

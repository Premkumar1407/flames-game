function cleanName(str) {
  return str.replace(/[^A-Za-z]/g, "").toLowerCase();
}

function calculateFLAMES() {
  let name1 = cleanName(document.getElementById("name1").value);
  let name2 = cleanName(document.getElementById("name2").value);
  const resultBox = document.getElementById("result");

  if (!name1 || !name2) {
    resultBox.innerHTML = "Please enter both names 💔";
    return;
  }

  let list1 = name1.split("");
  let list2 = name2.split("");

  for (let i = 0; i < list1.length; i++) {
    let ch = list1[i];
    let index = list2.indexOf(ch);
    if (index !== -1) {
      list1.splice(i, 1);
      list2.splice(index, 1);
      i--;
    }
  }

  let count = list1.length + list2.length;
  let flames = ["F", "L", "A", "M", "E", "S"];
  let index = 0;

  while (flames.length > 1) {
    index = (index + count - 1) % flames.length;
    flames.splice(index, 1);
  }

  let meaning = {
    "F": "💛 Friends Forever!",
    "L": "❤️ True Love!",
    "A": "💖 Affectionate Bond!",
    "M": "💍 Marriage Destiny!",
    "E": "💔 Enemies (Oops!)",
    "S": "👫 Siblings Love!"
  };

  resultBox.innerHTML = `<span>${meaning[flames[0]]}</span>`;
}

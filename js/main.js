//navbar stuff
const navLinksNode = document.querySelector(".nav-links");
const navBurgerNode = document.querySelector(".nav-burger");
const navNode = document.querySelector("nav");

const toggleNavLinks = () => {
  navLinksNode.classList.toggle("nav-links-active");
  navBurgerNode.classList.toggle("nav-burger-active");
  navNode.classList.toggle("nav-active");
  if (navBurgerNode.classList.contains("nav-burger-active")){
    navBurgerNode.style.borderBottomRightRadius = 0;
    navBurgerNode.style.borderBottomLeftRadius = 0;
  }
  else {
    navBurgerNode.style.borderRadius = "1rem";
  }
};

const jsCounter = (parentElement) => {
  const allCounterSpans = parentElement.querySelectorAll(".js-counter");

  allCounterSpans.forEach(span => {
      const targetValue = parseInt(span.dataset.targetValue);
      const time = parseInt(span.dataset.time);
      const counted = span.dataset.counted;

      const totalCallAmt = time / 5;
      const increment = Math.round(targetValue / totalCallAmt);

      if (counted === "true") {
          return;
      }

      span.dataset.counted = "true";
      setInterval(() => {
          const curAmt = parseInt(span.innerHTML.replaceAll(',', ''));

          if (curAmt >= targetValue) {
              // span.innerHTML = targetValue.toString();
              span.innerHTML = addCommaToNum(targetValue);
              clearInterval();
          }
          else {
              // span.innerHTML = (curAmt + increment).toString();
              span.innerHTML = addCommaToNum(curAmt + increment);
          }
      }, 5);
  });
};

const addCommaToNum = (value) => {
  let finalString = "";
  const valueString = value.toString();

  for (let i = valueString.length - 1; i >= 0; i--) {
      if ((valueString.length - 1 - i) % 3 === 0) {
          finalString = ',' + finalString;
      }
      finalString = valueString.charAt(i) + finalString;
  }

  return finalString.substring(0, finalString.length - 1);
};
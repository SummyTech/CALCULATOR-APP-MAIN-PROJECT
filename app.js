let currentInput = "";
      let display = document.getElementById("display");
      const buttons = document.querySelectorAll(".key");

      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const val = btn.innerText;

          if (val === "RESET") {
            currentInput = "";
          } else if (val === "DEL") {
            currentInput = currentInput.slice(0, -1);
          } else if (val === "=") {
            try {
              currentInput = currentInput.replace("x", "*");
              currentInput = eval(currentInput).toString();
            } catch (e) {
              currentInput = "Error";
            }
          } else {
            currentInput += val;
          }

          display.innerText = currentInput || "0";
        });
      });

      // Theme toggle logic
      const toggle = document.getElementById("toggle");
      const body = document.body;
      let themeIndex = 1;

      toggle.addEventListener("click", () => {
        themeIndex = (themeIndex % 3) + 1;
        body.className = `theme-${themeIndex} transition-theme bg-[var(--theme-bg)] text-white`;
        toggle.style.left = `${(themeIndex - 1) * 33}%`;
      });
      
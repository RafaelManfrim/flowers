onload = () =>{
        document.body.classList.remove("container");

        setTimeout(() => {
                const background = document.querySelector(".night")
                const textSpan = document.createElement("span")
                textSpan.innerHTML = "Eu te amo, Ana Rita!"
                background.appendChild(textSpan)
        }, [1500])
};

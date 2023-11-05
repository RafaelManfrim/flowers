onload = () =>{
        document.body.classList.remove("container");

        setTimeout(() => {
                const textSpan = document.createElement("span")
                textSpan.innerHTML = "Eu te amo, Ana Rita <3"
                document.body.appendChild(textSpan)
        }, [1500])
};

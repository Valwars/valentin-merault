
export const Dots =() => {

    return (
        <>

                <img src="/assets/dots.png"
                       alt="light themed image"
                       className={"fixed top-1/2 right-0 z-0 h-1/3 w-3/6"}
                       style={{ transform: "translateY(-50%)", zIndex: -2 }}
                />



                <img src="/assets/dotsd.png" alt="dark themed image"
                       className={"fixed top-1/2 right-0 z-0 h-1/3 w-3/6"}
                       style={{ transform: "translateY(-50%)", zIndex: -2 }}
                />

        </>
    );
}


function Main() {
    let frameStyle = {
        background: 'rgb(2, 0, 36)', 
        // More complex background property for newer browsers
        background: 'linear-gradient(0deg, rgba(2, 0, 36, 1) 0%, rgba(9, 49, 121, 1), 4%, rgba(0, 255, 239, 1) 100%)'
    };

    return ( 
        <main className="col-md-10">
            <div className="frame" style={frameStyle}>
                <img src="/oranda.png" alt="Oranda" />
            </div>
            <p>
                Fancy goldfish are interesting, fun additions to many tanks or ponds. However, they all have their own special needs and they can’t be kept with just any tank mates. It’s important to ensure you carefully choose tank mates for your fancies so avoid injury and stress. Some of them are weak swimmers or have poor vision, meaning they can easily be out competed for food and may not be able to escape bullying by other fish. Many fancies are becoming more popular in the aquatics trade, while others are rare enough that you may never see them in person. Each breed of fancy goldfish has its own charm and unique qualities, making them beautiful centerpieces for your tank.
            </p>
        </main>
     );
}

export default Main;
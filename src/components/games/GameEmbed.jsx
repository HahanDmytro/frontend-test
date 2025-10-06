import react from 'react';

export default function GameEmbed() {
    return(
        <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
            <iframe
                src='https://vite-game-two.vercel.app'
                width='800px'
                height='600px'
                style={{ border: "2px solid white", borderRadius: "8px" }}
                title="Space Shuttle Game"
            />
        </div>
    )
}
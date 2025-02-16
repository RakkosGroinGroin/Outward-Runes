import React, { useState } from "react";
import A from './images/A.png';
import B from './images/B.png';
import C from './images/C.png';
import D from './images/D.png';
import E from './images/E.png';
import F from './images/F.png';
import G from './images/G.png';
import H from './images/H.png';
import I from './images/I.png';
import J from './images/J.png';
import K from './images/K.png';
import L from './images/L.png';
import M from './images/M.png';
import N from './images/N.png';
import O from './images/O.png';
import P from './images/P.png';
import Q from './images/Q.png';
import R from './images/R.png';
import S from './images/S.png';
import T from './images/T.png';
import U from './images/U.png';
import V from './images/V.png';
import W from './images/W.png';
import X from './images/X.png';
import Y from './images/Y.png';
import Z from './images/Z.png';
import Zero from './images/0.png';
import One from './images/1.png';
import Two from './images/2.png';
import Three from './images/3.png';
import Four from './images/4.png';
import Five from './images/5.png';
import Six from './images/6.png';
import Seven from './images/7.png';
import Eight from './images/8.png';
import Nine from './images/9.png';

const imageMap = {
  A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,
  0: Zero, 1: One, 2: Two, 3: Three, 4: Four, 5: Five, 6: Six, 7: Seven, 8: Eight, 9: Nine
};

export default function LetterGrid() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const handleClick = (char) => {
    setInputText((prev) => prev + char);
  };

  const translateText = async () => {
    if (!inputText.trim()) return;
    const apiUrl = `https://api.mymemory.translated.net/get?q=${inputText}&langpair=fr|en`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setTranslatedText(data.responseData.translatedText);
    } catch (error) {
      console.error("Error", error);
      setTranslatedText("Error");
    }
  };

  return (
    <div style={{ backgroundColor: '#1e1e1e', color: '#f5f5f5', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {/* Titre avec espace */}
      <h1 style={{ marginTop: '20px', fontSize: '24px', fontWeight: 'bold', color: '#ffffff' }}>
        Outward Runes
      </h1>

      {/* Affichage du texte saisi */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #333', borderRadius: '4px', width: '100%', maxWidth: '600px', textAlign: 'center', fontSize: '18px', fontWeight: 'bold', backgroundColor: '#333' }}>
        {inputText || "Choose Runes"}
      </div>

      {/* Grille de boutons */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px', width: '100%', maxWidth: '600px' }}>
        {characters.split("").map((char, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button
              style={{ width: '48px', height: '48px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #555', borderRadius: '4px', backgroundColor: '#333', cursor: 'pointer', transition: 'background-color 0.3s' }}
              onClick={() => handleClick(char)}
            >
              <img src={imageMap[char]} alt={char} style={{ width: '40px', height: '40px' }} />
            </button>
            <span style={{ fontSize: '12px', marginTop: '4px', color: '#f5f5f5' }}>{char}</span>
          </div>
        ))}
      </div>

      {/* Boutons supplémentaires */}
      <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
        <button
          style={{ padding: '8px 16px', backgroundColor: '#444', color: '#fff', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.5)', transition: 'background-color 0.3s' }}
          onClick={() => handleClick(" ")}
        >
          Space
        </button>
        <button
          style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: '#fff', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.5)', transition: 'background-color 0.3s' }}
          onClick={() => setInputText("")}
        >
          Reset
        </button>
        <button
          style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: '#fff', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.5)', transition: 'background-color 0.3s' }}
          onClick={translateText}
        >
          Translate
        </button>
      </div>

      {/* Affichage du texte traduit */}
      {translatedText && (
        <div style={{ marginTop: '16px', padding: '8px', border: '1px solid #555', borderRadius: '4px', width: '100%', maxWidth: '600px', textAlign: 'center', fontSize: '18px', fontWeight: '600', backgroundColor: '#333', color: '#f5f5f5' }}>
          Translation : {translatedText}
        </div>
      )}
    </div>
  );
}

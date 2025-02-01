import React, { useState } from 'react';
import axios from 'axios';
import './SentimentAnalyzer.css'; // Separate CSS file

const SentimentAnalyzer = () => {
    const [statement, setStatement] = useState('');
    const [sentiment, setSentiment] = useState('');

    const handleAnalyzeSentiment = async () => {
        try {
            // Assuming you have an API endpoint to analycdze sentiment
            const response = await axios.post('http://127.0.0.1:5000/predict', { statement });
            setSentiment(response.data.sentiment);
        } catch (error) {
            console.error('Error analyzing sentiment:', error);
        }
    };

    return (
        <div className="sentiment-analyzer">
      <textarea
          className="statement-input"
          placeholder="Enter your statement here..."
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
      />
            <button className="analyze-button" onClick={handleAnalyzeSentiment}>
                Analyze Sentiment
            </button>
            {sentiment && (
                <div className="sentiment-result">
                    <h3>Sentiment Result:</h3>
                    <p>{sentiment}</p>
                </div>
            )}
        </div>
    );
};

export default SentimentAnalyzer;

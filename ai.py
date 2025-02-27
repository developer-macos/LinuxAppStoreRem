from flask import Flask, request, jsonify
import openai

openai.api_key = "YOUR_API_KEY"

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '')
    if not user_message:
        return jsonify({'error': 'Message is required'}), 400
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful AI assistant for a racing game."},
            {"role": "user", "content": user_message}
        ]
    )
    return jsonify({'response': response['choices'][0]['message']['content']})

if __name__ == '__main__':
    app.run(debug=True)

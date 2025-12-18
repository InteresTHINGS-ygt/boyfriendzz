import React, { useState } from 'react';
import { RefreshCw, Play, Trophy, User, Zap, Eye, Video } from 'lucide-react';

const PersonalityTest = () => {
  const [currentStep, setCurrentStep] = useState('intro'); // intro, question, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    Slogo: 0,
    Finoggin: 0,
    Stubaroo: 0,
    Victoar: 0,
    Rishy: 0
  });

  const questions = [
    {
      text: "You're playing a Battle Royale with friends. What's your strategy?",
      options: [
        { text: "Take charge, lead the team, and eliminate everyone with pure skill.", character: "Slogo" },
        { text: "Hide in a corner, wait for everyone to die, then claim the win.", character: "Rishy" },
        { text: "Run in screaming, miss a jump, and accidentally fall off the map.", character: "Finoggin" },
        { text: "Set a sneaky trap and watch from a distance while laughing.", character: "Stubaroo" },
        { text: "Narrate the entire battle dramatically like I'm in a movie.", character: "Victoar" }
      ]
    },
    {
      text: "Your friend just found a 'DO NOT PRESS' button. What do you do?",
      options: [
        { text: "Trick them into pressing it so they blow up instead of me.", character: "Stubaroo" },
        { text: "Yell 'DON'T TOUCH IT!' while accidentally pressing it myself.", character: "Finoggin" },
        { text: "Analyze the redstone wiring to see what it actually does.", character: "Slogo" },
        { text: "Ignore it. I'm busy showing my spice cabinet to the camera.", character: "Rishy" },
        { text: "Film a POV video: 'What happens if we press this??'", character: "Victoar" }
      ]
    },
    {
      text: "How do you handle losing a game?",
      options: [
        { text: "I don't lose often, but if I do, I demand a rematch immediately.", character: "Slogo" },
        { text: "Scream at the top of my lungs and blame the lag.", character: "Finoggin" },
        { text: "Shrug it off. I was just chilling anyway.", character: "Rishy" },
        { text: "Plot my revenge for the next round silently.", character: "Stubaroo" },
        { text: "Analyze the emotional impact of the loss for personal growth.", character: "Victoar" }
      ]
    },
    {
      text: "Pick a role in the friend group.",
      options: [
        { text: "The Leader / The Boss.", character: "Slogo" },
        { text: "The Chaos / The Loud One.", character: "Finoggin" },
        { text: "The Vibe Curator / The Sleeper.", character: "Rishy" },
        { text: "The Prankster / The Schemer.", character: "Stubaroo" },
        { text: "The Creative / The Main Character.", character: "Victoar" }
      ]
    },
    {
      text: "What's your ideal Saturday?",
      options: [
        { text: "Grinding content and winning challenges.", character: "Slogo" },
        { text: "Running around doing random energetic stuff until I crash.", character: "Finoggin" },
        { text: "Staying in bed until noon, then maybe getting a coffee.", character: "Rishy" },
        { text: "Messing with my friends and causing mild inconvenience.", character: "Stubaroo" },
        { text: "Exploring a new hobby or practicing acting.", character: "Victoar" }
      ]
    },
    {
      text: "Someone accuses you of being 'Sus'. Your defense?",
      options: [
        { text: "Make a joke that makes me sound even more sus.", character: "Rishy" },
        { text: "Deny it loudly and panic!", character: "Finoggin" },
        { text: "Explain logically why it literally cannot be me.", character: "Slogo" },
        { text: "Turn the accusation back on them. Gaslight 101.", character: "Stubaroo" },
        { text: "Strike a pose and ask if I look guilty.", character: "Victoar" }
      ]
    },
    {
      text: "You need to build a house in Minecraft. What does it look like?",
      options: [
        { text: "A highly efficient fortress with automated farms.", character: "Slogo" },
        { text: "A cozy aesthetic build with a really nice kitchen.", character: "Rishy" },
        { text: "A dirt hut that somehow catches on fire.", character: "Finoggin" },
        { text: "A fake base that traps anyone who walks in.", character: "Stubaroo" },
        { text: "A unique artistic structure with great lighting.", character: "Victoar" }
      ]
    },
    {
      text: "A jump scare happens in a horror game! You...",
      options: [
        { text: "Don't flinch. I'm focused on survival.", character: "Slogo" },
        { text: "Scream loud enough to break the microphone.", character: "Finoggin" },
        { text: "Laugh at my friends who got scared.", character: "Stubaroo" },
        { text: "Quietly hide in a locker and say nothing.", character: "Rishy" },
        { text: "Appreciate the acting performance of the ghost.", character: "Victoar" }
      ]
    },
    {
      text: "What is your communication style during a team task?",
      options: [
        { text: "Giving clear, direct orders to get the job done.", character: "Slogo" },
        { text: "Yelling over everyone else uncontrollably.", character: "Finoggin" },
        { text: "Making sarcastic comments and witty comebacks.", character: "Stubaroo" },
        { text: "Mumbling chill observations or remaining silent.", character: "Rishy" },
        { text: "Expressive, dramatic, and full of personality.", character: "Victoar" }
      ]
    },
    {
      text: "You just won the championship! How do you celebrate?",
      options: [
        { text: "A humble 'GG' followed by 'I told you I'm the best.'", character: "Slogo" },
        { text: "Running around in circles screaming 'LET'S GOOO!'", character: "Finoggin" },
        { text: "Smirking and saying 'Too easy.'", character: "Stubaroo" },
        { text: "Relaxing and saying 'That was close, guys.'", character: "Rishy" },
        { text: "Thanking the fans and bowing theatrically.", character: "Victoar" }
      ]
    }
  ];

  const characters = {
    Slogo: {
      title: "The Professional Leader (Slogo)",
      desc: "You are the leader of the pack! Like Slogo, you are skilled, focused, and determined to win. You might take things a bit seriously sometimes, but it's only because you know you're the best. You hold the team together, even when they are being absolute chaos.",
      color: "bg-red-500",
      icon: <Trophy size={48} className="text-white" />
    },
    Finoggin: {
      title: "The Chaotic Energy (Finoggin)",
      desc: "You are pure, unfiltered chaos! Like Fin, you bring the energy (and the volume) to every situation. You might be a little clumsy or prone to bad luck, but your enthusiasm is infectious. You are the heart of the fun, even if you fall off the map sometimes.",
      color: "bg-green-500",
      icon: <Zap size={48} className="text-white" />
    },
    Stubaroo: {
      title: "The Sneaky Tactician (Stubaroo)",
      desc: "You are the mastermind in the shadows. Like Stu, you might not always be the loudest, but you are always watching and plotting. You love a good prank and have a sharp wit. While others are screaming, you are setting the trap.",
      color: "bg-blue-500",
      icon: <Eye size={48} className="text-white" />
    },
    Rishy: {
      title: "The Chill Vibe (Rishy POV)",
      desc: "You are the definition of chill. Like Rishy, you prefer to stay low-key, hide in the background, and secure the win while everyone else takes each other out. You value your comfort (and your spice cabinet) and bring a relaxed, relatable energy.",
      color: "bg-purple-500",
      icon: <User size={48} className="text-white" />
    },
    Victoar: {
      title: "The Creative Soul (Victoar)",
      desc: "You are the main character of your own movie. Like Victoar, you are enthusiastic, supportive, and have a flair for the dramatic. You see the world through a unique POV and aren't afraid to try new things or express yourself creatively.",
      color: "bg-yellow-500",
      icon: <Video size={48} className="text-white" />
    }
  };

  const handleOptionClick = (character) => {
    setScores(prev => ({
      ...prev,
      [character]: prev[character] + 1
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentStep('result');
    }
  };

  const getResult = () => {
    let maxScore = -1;
    let winner = 'Slogo';
    
    Object.entries(scores).forEach(([char, score]) => {
      if (score > maxScore) {
        maxScore = score;
        winner = char;
      } else if (score === maxScore) {
        if (Math.random() > 0.5) winner = char;
      }
    });
    return characters[winner];
  };

  const resetQuiz = () => {
    setScores({ Slogo: 0, Finoggin: 0, Stubaroo: 0, Victoar: 0, Rishy: 0 });
    setCurrentQuestionIndex(0);
    setCurrentStep('intro');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border-4 border-slate-700">
        
        {/* Header */}
        <div className="bg-slate-900 p-6 text-center border-b border-slate-700">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-green-400 to-blue-400">
            Who Are You in the Group?
          </h1>
        </div>

        {/* Content Body */}
        <div className="p-8">
          
          {/* INTRO STEP */}
          {currentStep === 'intro' && (
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <p className="text-xl text-slate-300">
                  Are you the pro gamer, the chaos agent, or the mastermind?
                </p>
                <p className="text-slate-400">
                  Answer 10 questions to find out which YouTuber personality matches you best!
                </p>
              </div>
              
              <div className="flex justify-center gap-3 flex-wrap">
                <div className="p-3 bg-slate-700 rounded-xl w-20 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center font-bold">S</div>
                  <span className="text-[10px]">Pro</span>
                </div>
                <div className="p-3 bg-slate-700 rounded-xl w-20 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold">F</div>
                  <span className="text-[10px]">Chaos</span>
                </div>
                <div className="p-3 bg-slate-700 rounded-xl w-20 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">St</div>
                  <span className="text-[10px]">Sneaky</span>
                </div>
                <div className="p-3 bg-slate-700 rounded-xl w-20 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center font-bold">R</div>
                  <span className="text-[10px]">Chill</span>
                </div>
                <div className="p-3 bg-slate-700 rounded-xl w-20 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-slate-900">V</div>
                  <span className="text-[10px]">Arts</span>
                </div>
              </div>

              <button 
                onClick={() => setCurrentStep('question')}
                className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95 w-full md:w-auto"
              >
                Start the Test
                <div className="absolute inset-0 rounded-2xl ring-4 ring-blue-400/30 group-hover:ring-blue-400/60 transition-all" />
              </button>
            </div>
          )}

          {/* QUESTION STEP */}
          {currentStep === 'question' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
              <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-widest">
                <span>Question {currentQuestionIndex + 1} / {questions.length}</span>
                <span>Personality Check</span>
              </div>

              <h2 className="text-2xl font-bold text-white leading-relaxed">
                {questions[currentQuestionIndex].text}
              </h2>

              <div className="grid gap-3">
                {questions[currentQuestionIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option.character)}
                    className="w-full text-left p-4 rounded-xl bg-slate-700 hover:bg-slate-600 hover:ring-2 hover:ring-blue-400 transition-all flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-slate-600 group-hover:bg-blue-500 flex items-center justify-center font-bold text-sm transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-base md:text-lg text-slate-200 group-hover:text-white">{option.text}</span>
                  </button>
                ))}
              </div>

              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-500 h-full transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* RESULT STEP */}
          {currentStep === 'result' && (
            <div className="text-center space-y-8 animate-in zoom-in duration-500">
              <div className="space-y-2">
                <h3 className="text-xl text-slate-400 uppercase tracking-widest font-bold">Your Match Is</h3>
                <h1 className="text-4xl md:text-5xl font-black text-white">{getResult().title}</h1>
              </div>

              <div className="flex justify-center">
                <div className={`w-32 h-32 rounded-full ${getResult().color} flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] animate-bounce-slow`}>
                  {getResult().icon}
                </div>
              </div>

              <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
                <p className="text-lg leading-relaxed text-slate-200">
                  {getResult().desc}
                </p>
              </div>

              <button 
                onClick={resetQuiz}
                className="flex items-center justify-center gap-2 mx-auto px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl font-bold transition-all hover:scale-105"
              >
                <RefreshCw size={20} />
                Retake Test
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PersonalityTest;

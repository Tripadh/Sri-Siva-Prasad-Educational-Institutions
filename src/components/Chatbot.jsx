import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const SYSTEM_PROMPT = `You are a helpful, highly knowledgeable, and friendly AI assistant for Sri Siva Prasad Institute of Sciences. 
Use the following context to answer the user's questions about the website accurately.

**Website Overview:**
- **Home page:** Quick snapshot of the institution’s mission, vision, and latest news/announcements.
- **About Us:** History, leadership, accreditation, and campus facilities.
- **Courses & Programs:** Full list of undergraduate, postgraduate, and diploma courses across disciplines (engineering, management, arts, etc.). Includes eligibility criteria, curriculum highlights, and fee structure.
- **Admissions:** Step-by-step guide to apply, important dates, entrance exam details, and online application portal.
- **Student Life:** Clubs, events, hostels, sports, and campus culture.
- **Faculty & Staff:** Profiles of key faculty, research interests, and contact details.
- **Research & Development:** Ongoing projects, publications, labs, and collaborations.
- **Alumni:** Success stories, alumni network, and events.
- **FAQs:** Answers to common queries about admissions, academics, and campus facilities.
- **Contact Us:** Address, phone numbers, email, and an interactive map.

**Fee Structure Information:**
The fee structure for all courses (undergraduate, postgraduate, diploma, and short-term programs) is listed under the **“Courses & Programs”** section of the website. 
- **Tuition Fees:** Shown per semester/academic year for each course.
- **Board/Accommodation Fees:** Separate charges for hostel and meal plans (if applicable).
- **Other Charges:** Library, lab, sports, and activity fees.
- **Scholarships & Discounts:** Eligibility criteria for fee waivers or merit-based scholarships.
*Navigation Guide for exact fees:* Tell the user to go to the **Courses & Programs** page, select their discipline, and click their course of interest to view the detailed fee schedule. Offer to guide them to the exact page if they mention a specific program.

**Additional Info:** 
The site is designed for easy navigation, with a responsive layout that works on desktops, tablets, and smartphones. It also hosts a portal for logged-in students and faculty to access grades, timetables, and internal announcements.

**CRITICAL INSTRUCTIONS FOR FORMATTING:**
1. **Be Structured & Professional:** Always format your responses beautifully using bullet points, bold text for key terms, and line breaks to make it easy to read. Do not output giant walls of text.
2. **Be Friendly:** Always maintain a welcoming and helpful tone. Use a polite closing.
3. **Stay in Context:** Always base your answers on this provided context if relevant. If the user asks something outside this context, politely clarify that your knowledge is limited to Sri Siva Prasad Institute of Sciences.`;

const formatMessage = (text) => {
  if (!text) return { __html: '' };
  // Replace **text** with <strong>text</strong>
  let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Replace *text* with <em>text</em>
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  return { __html: html };
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I am the campus Chatbot. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-20b',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
            userMessage
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message;
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error fetching chat response:', error);
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: '90px',
              right: '20px',
              width: '350px',
              height: '500px',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 10000,
              overflow: 'hidden',
              border: '1px solid #eaeaea'
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #007bff, #0056b3)',
              color: 'white',
              padding: '15px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontWeight: 'bold',
              fontSize: '16px'
            }}>
              <span>Chatbot</span>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '20px',
                  lineHeight: 1
                }}
              >
                &times;
              </button>
            </div>

            {/* Messages Area */}
            <div style={{
              flex: 1,
              padding: '15px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              backgroundColor: '#f8f9fa'
            }}>
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '80%',
                    backgroundColor: msg.role === 'user' ? '#007bff' : 'white',
                    color: msg.role === 'user' ? 'white' : '#333',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    borderBottomRightRadius: msg.role === 'user' ? '2px' : '12px',
                    borderBottomLeftRadius: msg.role === 'assistant' ? '2px' : '12px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                    fontSize: '14px',
                    lineHeight: '1.4',
                    whiteSpace: 'pre-wrap'
                  }}
                  dangerouslySetInnerHTML={msg.role === 'user' ? undefined : formatMessage(msg.content)}
                >
                  {msg.role === 'user' ? msg.content : null}
                </div>
              ))}
              {isLoading && (
                <div style={{
                  alignSelf: 'flex-start',
                  backgroundColor: 'white',
                  color: '#666',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  borderBottomLeftRadius: '2px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                  fontSize: '14px'
                }}>
                  Thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form 
              onSubmit={handleSend}
              style={{
                display: 'flex',
                padding: '15px',
                borderTop: '1px solid #eaeaea',
                backgroundColor: 'white',
                gap: '10px'
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                style={{
                  flex: 1,
                  padding: '10px 15px',
                  border: '1px solid #ddd',
                  borderRadius: '20px',
                  outline: 'none',
                  fontSize: '14px'
                }}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: (isLoading || !input.trim()) ? 'not-allowed' : 'pointer',
                  opacity: (isLoading || !input.trim()) ? 0.7 : 1
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          height: '60px',
          padding: isOpen ? '0 20px' : '0 28px',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
          color: 'white',
          border: 'none',
          boxShadow: '0 10px 30px rgba(37, 99, 235, 0.4)',
          cursor: 'pointer',
          zIndex: 10000,
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isOpen ? 'scale(0.95)' : 'scale(1)',
          fontFamily: 'inherit'
        }}
        onMouseOver={(e) => {
          if (!isOpen) e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(37, 99, 235, 0.6)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = isOpen ? 'scale(0.95)' : 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.4)';
        }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              <circle cx="12" cy="12" r="4"></circle>
            </svg>
            <span style={{ fontWeight: '700', fontSize: '16px', letterSpacing: '0.5px' }}>Ask AI</span>
          </>
        )}
      </button>
    </>
  );
}

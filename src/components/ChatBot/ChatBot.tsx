import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  TextField, 
  IconButton, 
  Avatar,
  Fab,
  Zoom,
  useTheme,
  styled
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWindow = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  bottom: 100,
  right: 20,
  width: 350,
  height: 500,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  zIndex: 1000,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    height: '70vh',
    bottom: 80,
    right: '5%',
  },
}));

const MessageContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.background.paper,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main,
    borderRadius: '3px',
  },
}));

const MessageBubble = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isBot'
})<{ isBot: boolean }>(({ theme, isBot }) => ({
  maxWidth: '80%',
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  alignSelf: isBot ? 'flex-start' : 'flex-end',
  backgroundColor: isBot ? theme.palette.grey[100] : theme.palette.primary.main,
  color: isBot ? theme.palette.text.primary : theme.palette.primary.contrastText,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    [isBot ? 'left' : 'right']: -8,
    borderStyle: 'solid',
    borderWidth: '8px 8px 0 8px',
    borderColor: `${isBot ? theme.palette.grey[100] : theme.palette.primary.main} transparent transparent transparent`,
  },
}));

const initialMessages: Message[] = [
  {
    text: 'Willkommen bei MIMI Tech AI! Ich bin Ihr KI-Assistent und helfe Ihnen gerne bei Fragen zu unseren Lösungen und Produkten. Wie kann ich Sie unterstützen?',
    sender: 'bot',
    timestamp: new Date()
  }
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking
    setTimeout(async () => {
      const botResponse = await generateBotResponse(inputValue);
      const botMessage: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('naturio')) {
      return 'Naturio ist unsere innovative KI-Lösung für nachhaltige Landwirtschaft und Ressourcenmanagement. Die Plattform bietet provisionsfreie Abomodelle und umfassende Händler-Tools. Möchten Sie mehr über die spezifischen Features erfahren?';
    }
    
    if (message.includes('preis') || message.includes('kosten') || message.includes('abo')) {
      return 'Wir bieten flexible Abomodelle für unterschiedliche Unternehmensgrößen an - komplett ohne versteckte Gebühren oder Provisionen. Gerne erstellen wir Ihnen ein individuelles Angebot. Sie können auch unseren Produktkonfigurator nutzen, um die optimale Lösung für Ihre Anforderungen zu finden.';
    }
    
    if (message.includes('kontakt') || message.includes('berater')) {
      return 'Sie erreichen unser B2B-Vertriebsteam über das Kontaktformular auf unserer Website oder per E-Mail an contact@mimitech.ai. Alternativ können Sie auch direkt einen Beratungstermin vereinbaren.';
    }

    if (message.includes('prozess') || message.includes('automatisierung')) {
      return 'Unsere KI-gestützte Prozessautomatisierung optimiert Ihre Arbeitsabläufe durch intelligente Analyse und Automatisierung. Wir bieten maßgeschneiderte Lösungen für verschiedene Branchen und Anwendungsfälle. Welchen Bereich möchten Sie optimieren?';
    }

    if (message.includes('daten') || message.includes('analyse')) {
      return 'Mit unseren KI-gestützten Analysetools erkennen Sie Muster in Ihren Daten und treffen datenbasierte Entscheidungen. Unsere Prognosemodelle unterstützen Sie bei der strategischen Planung. Gerne zeige ich Ihnen konkrete Anwendungsbeispiele.';
    }

    if (message.includes('nachhaltig') || message.includes('umwelt')) {
      return 'Nachhaltigkeit ist ein Kernwert von MIMI Tech AI. Unsere Lösungen sind darauf ausgerichtet, Ressourcen zu schonen und CO₂-Emissionen zu reduzieren. Zum Beispiel optimiert Naturio den Ressourceneinsatz in der Landwirtschaft durch KI-gestützte Analysen.';
    }

    if (message.includes('sicherheit') || message.includes('datenschutz')) {
      return 'Datensicherheit und Datenschutz haben bei uns höchste Priorität. Wir arbeiten nach strengen Sicherheitsstandards und gewährleisten die DSGVO-konforme Verarbeitung aller Daten. Unsere Systeme werden regelmäßig von externen Experten geprüft.';
    }

    return 'Ich verstehe Ihr Interesse. Um Ihnen die bestmögliche Beratung zu bieten, empfehle ich ein persönliches Gespräch mit unserem Expertenteam. Soll ich Ihnen die Kontaktmöglichkeiten zeigen?';
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <Zoom in={!isOpen}>
        <Fab
          color="primary"
          aria-label="chat"
          onClick={() => setIsOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <SmartToyIcon />
        </Fab>
      </Zoom>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <ChatWindow>
              <Box sx={{ 
                p: 2, 
                borderBottom: 1, 
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar
                    sx={{ 
                      bgcolor: 'primary.dark',
                      width: 40, 
                      height: 40 
                    }}
                  >
                    <SmartToyIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      MIMI AI Assistant
                    </Typography>
                    <Typography variant="caption">
                      Immer für Sie da
                    </Typography>
                  </Box>
                </Box>
                <IconButton 
                  onClick={() => setIsOpen(false)}
                  sx={{ color: 'inherit' }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>

              <MessageContainer>
                {messages.map((message, index) => (
                  <MessageBubble
                    key={index}
                    isBot={message.sender === 'bot'}
                  >
                    <Typography variant="body1">
                      {message.text}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'block',
                        textAlign: message.sender === 'bot' ? 'left' : 'right',
                        mt: 0.5,
                        opacity: 0.7,
                      }}
                    >
                      {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Typography>
                  </MessageBubble>
                ))}
                <div ref={messagesEndRef} />
              </MessageContainer>

              <Box sx={{ 
                p: 2, 
                borderTop: 1, 
                borderColor: 'divider',
                bgcolor: 'background.paper'
              }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Ihre Nachricht..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    variant="outlined"
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                      },
                    }}
                  />
                  <IconButton 
                    color="primary"
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    sx={{
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                      '&.Mui-disabled': {
                        bgcolor: 'action.disabledBackground',
                        color: 'action.disabled',
                      },
                    }}
                  >
                    <SendIcon />
                  </IconButton>
                </Box>
              </Box>
            </ChatWindow>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;

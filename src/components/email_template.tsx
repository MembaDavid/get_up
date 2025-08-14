import { Body, Container, Head, Html, Preview, Section, Text } from '@react-email/components';

interface ContactEmailProps {
  name: string;
  emails: string;
  messages: string;
}

export const ContactEmail = ({ name, emails, messages }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={heading}>📩 New Contact Message</Text>
          </Section>

          <Section style={content}>
            <Text style={label}><strong>Name:</strong> {name}</Text>
            <Text style={label}><strong>Email:</strong> {emails}</Text>
            <Text style={messageStyle}>{messages}</Text>
          </Section>

          <Section>
            <Text style={footer}>This message was sent via your website contact form.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

ContactEmail.PreviewProps = {
  name: 'John Doe',
  emails: 'john@example.com',
  messages: 'Hello! I am interested in your services. Please get back to me as soon as possible.',
} as ContactEmailProps;

// Styles
const fontFamily = 'HelveticaNeue,Helvetica,Arial,sans-serif';

const main = {
  backgroundColor: '#f4f4f7',
  fontFamily,
  padding: '20px',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
};

const heading = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '15px',
};

const label = {
  fontSize: '14px',
  marginBottom: '10px',
  color: '#333',
};

const messageStyle = {
  fontSize: '14px',
  marginTop: '10px',
  padding: '10px',
  backgroundColor: '#f9f9f9',
  borderRadius: '5px',
  lineHeight: 1.5,
  whiteSpace: 'pre-wrap' as const,
};

const content = {
  marginBottom: '20px',
};

const footer = {
  fontSize: '12px',
  color: '#777',
  textAlign: 'center' as const,
};

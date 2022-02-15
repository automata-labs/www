import styled from 'styled-components';

const CardStyled = styled.a({
  border: '1px solid rgba(255, 255, 255, 0.10)',
  borderRadius: 10,
  display: 'flex',
  padding: 16,
  marginTop: 12,
  transition: 'border-color .15s',

  ':hover': {
    borderColor: 'rgba(255, 255, 255, 0.35)'
  },
});

const CardImage = styled.img({
  border: '1px solid rgba(255, 255, 255, 0.17)',
  borderRadius: 8,
  height: 68,
  width: 68,
})

const CardMetadata = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  marginLeft: 16,
});

const CardTitle = styled.div({
  fontSize: 18,
  fontWeight: 500,
  marginBottom: 4,
  marginTop: 2,
});

const CardSubtitle = styled.span({
  fontSize: 18,
  fontWeight: 400,
  opacity: 0.5,
});

const CardDescription = styled.div({
  fontSize: 14,
  opacity: 0.5,
  lineHeight: 1.4211,
});

export default function Card({ src, title, subtitle, description, href }) {
  return (
    <CardStyled href={href}>
      <CardImage src={src} />
      <CardMetadata>
        <CardTitle>{title} <CardSubtitle>{subtitle}</CardSubtitle></CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardMetadata>
    </CardStyled>
  );
}

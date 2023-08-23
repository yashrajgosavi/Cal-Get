import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
  `;

const caption = (theme) => `
    font-family: ${theme.fonts.caption};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.caption};
    color: ${theme.colors.text.caption};
`;

const title = (theme) => `
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.title};
    color: ${theme.colors.text.heading};
`;

const body = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.primary};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.body};
`;

const variants = {
  caption,
  title,
  body,
  error,
  hint,
  label,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};

# Instruções para Usar PNG como Favicon

## Passo a Passo:

1. **Salve seu PNG do logo** em `public/favicon.png`
   - Tamanho recomendado: 32x32px ou 64x64px (será redimensionado automaticamente)
   - Formato: PNG com fundo transparente ou preto

2. **O layout já está configurado** para usar `favicon.png` como favicon principal!

3. **Opcional - Gerar tamanhos específicos:**

   Se quiser gerar os outros tamanhos também, você pode:

   - **icon-light-32x32.png** e **icon-dark-32x32.png** (32x32px)
   - **apple-icon.png** (180x180px para dispositivos Apple)

   Use uma ferramenta online como:
   - https://realfavicongenerator.net/
   - https://favicon.io/
   - Ou qualquer editor de imagens para redimensionar

## Arquivos de Favicon:

- ✅ `public/favicon.png` - **PRINCIPAL** (adicione seu PNG aqui)
- ✅ `public/icon.svg` - SVG alternativo (já atualizado)
- ⏳ `public/icon-light-32x32.png` - Para tema claro (opcional)
- ⏳ `public/icon-dark-32x32.png` - Para tema escuro (opcional)
- ⏳ `public/apple-icon.png` - Para dispositivos Apple (opcional)

## Nota:

O Next.js vai usar automaticamente o `favicon.png` como favicon principal. Os outros arquivos são opcionais mas melhoram a experiência em diferentes navegadores e temas.

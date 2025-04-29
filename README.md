# UI_MBX_USP_TCC

Pototipo de Interfaz de usuário criada para a finalização do curso para o titulo de especialista em engenheira de software baseada em um sintetizador. Arquivo com design para a experiencias de usuário e como orquestador para chamar o microsserviço do sintetizador através de localhost.

# Benvindo ao Toggle 👋

Este é um [Expo](https://expo.dev) projeto criado com [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Para começar

1. Instalar as dependencias

   ```bash
   npm install
   ```

 Documentação de React: 
 https://react.dev/learn/creating-a-react-app
 https://docs.expo.dev/bare/installing-expo-modules/

Para o inicio dos projetos novos em React Native usamos:

$ npm i -g create-react-native-app
$ create-react-native-app my-project
$ cd my-project
$ npm start

   ```bash
   npm install expo-av
   npm install expo-asset
   ```

# Elementos adicionais

# dependencies
node_modules/

# Expo
.expo/
dist/
web-build/

# Native
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# Metro
.metro-health-check*

# debug
npm-debug.*
yarn-debug.*
yarn-error.*

# macOS
.DS_Store
*.pem

# local env files
.env*.local

# typescript
*.tsbuildinfo


3. Começar o App

   ```bash
   npx expo start --clear or
   npx expo start --tunnel
   ```

Aqui, você encontrará opções da documentação dos recursos usados para o desenvolvimento do aplicativo:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

Você pode começar a desenvolver editando os arquivos dentro do diretório **app** da pasta menu. Este projeto usa [file-based routing](https://docs.expo.dev/router/introduction).

## Ao carregar um novo projeto

Quando esteja pronto, executar o programa: - Debbug!, aplicar código só no começo do projeto, as outras versões não devem ser resetadas

```bash
npm run reset-project
```
  

## Menu Gráfico de Synth (iPad mini (6th generation) - iOS 18.0)

#Abrir o aplicativo (Logo intro)
<img width="463" alt="Captura de Tela 2025-04-29 às 12 59 28" src="https://github.com/user-attachments/assets/fcad7287-c51c-4764-82a0-b682127e0d31" />

#Tela inicial

<img width="459" alt="Captura de Tela 2025-04-29 às 13 00 05" src="https://github.com/user-attachments/assets/6705428a-666a-41c9-a0c4-c2f4f11bf429" />

#Tela experimente

<img width="455" alt="Captura de Tela 2025-04-29 às 13 00 24" src="https://github.com/user-attachments/assets/63641b4a-3b9a-47ef-8bc2-b88a3cc13111" />


##  Aplicativo Demo Synth (iPhone 11 Pro - iOS 18.0)

#Tela Demo

![WhatsApp Image 2025-04-26 at 7 07 23 PM](https://github.com/user-attachments/assets/585657ea-d07d-4229-8e69-5e3d67cf1b2c)



- O aplicativo consegue se comunicar atreves de uma porta `localhost` no menu para chamar o synth Demo, isso com o proposito de poder chamar as futuras criações de cada sintetizador de forma independente usando um orquestador.


## Saber mais

Para saber mais sobre como desenvolver seu projeto com a Expo, consulte os seguintes recursos:

- [Expo documentation](https://docs.expo.dev/): Aprenda os fundamentos ou aprofunde-se em tópicos avançados com nosso [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Siga um tutorial passo a passo onde você criará um projeto que roda em Android, iOS e web.

## Junte-se à comunidade

Junte-se à nossa comunidade de desenvolvedores que criam aplicativos universais.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


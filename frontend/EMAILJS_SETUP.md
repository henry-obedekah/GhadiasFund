# Configuration EmailJS pour GHADIAS

## Instructions pour configurer EmailJS

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (200 emails/mois)
3. Connectez-vous à votre dashboard

### 1.5. Email de destination pour les tests
- **Email de test** : `henjr.obedekah@gmail.com`
- Tous les formulaires seront envoyés à cet email pendant la phase de test

### 2. Ajouter un service email
1. Cliquez sur "Email Services" dans le menu
2. Cliquez sur "Add New Service"
3. Choisissez **Gmail** comme provider
4. Connectez votre compte Gmail : `henjr.obedekah@gmail.com`
5. Suivez les instructions pour autoriser EmailJS à envoyer des emails
6. Copiez le **Service ID** généré

### 3. Créer un template email pour le formulaire de contact
1. Cliquez sur "Email Templates" dans le menu
2. Cliquez sur "Create New Template"
3. Nommez le template (ex: "contact-form")
4. **To Email** : `henjr.obedekah@gmail.com`
5. Configurez le sujet et le contenu avec ces variables :

**Sujet :**
```
New Investment Enquiry from {{from_name}}
```

**Contenu :**
```
You have received a new investment enquiry from GHADIAS website.

**Contact Information:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Country: {{country}}

**Investment Details:**
- Product: {{product}}
- Amount Range: {{amount}}

**Message:**
{{message}}

---
This email was sent from the GHADIAS Investment Fund contact form.
```

6. Copiez le **Template ID** généré

### 4. Créer un template email pour le formulaire d'onboarding
1. Créez un deuxième template (ex: "onboarding-form")
2. **To Email** : `henjr.obedekah@gmail.com`
3. Configurez le sujet et le contenu avec ces variables :

**Sujet :**
```
Pioneer Investor Application - {{from_name}}
```

**Contenu :**
```
New Pioneer Investor Application received from GHADIAS website.

**Applicant Information:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Country: {{country}}

**Investment Details:**
- Investment Amount: {{investment_amount}}
- Investment Timeline: {{investment_timeline}}

**Background:**
- Investment Experience: {{experience}}
- Motivation: {{motivation}}

**Questions:**
{{questions}}

---
This is a pioneer investor application for GHADIAS First 100 program.
```

6. Copiez le **Template ID** généré

### 5. Obtenir votre Public Key
1. Cliquez sur "Account" dans le menu
2. Copiez votre **Public Key**

### 6. Configurer le projet
1. Ouvrez le fichier `src/config/emailjs.ts`
2. Remplacez les valeurs par vos clés :

```typescript
export const emailjsConfig = {
  SERVICE_ID: 'votre_service_id',
  TEMPLATE_ID: 'votre_template_id_contact',
  TEMPLATE_ID_ONBOARDING: 'votre_template_id_onboarding',
  PUBLIC_KEY: 'votre_public_key',
};
```

### 7. Tester
1. Lancez le projet avec `npm run dev`
2. Testez le formulaire de contact
3. Testez le formulaire d'onboarding
4. Vérifiez que vous recevez les emails

## Variables des formulaires

### Formulaire de contact (ContactPage)
- `from_name`: Nom complet de l'utilisateur
- `from_email`: Email de l'utilisateur
- `phone`: Numéro de téléphone
- `country`: Pays de résidence
- `product`: Produit d'investissement choisi
- `amount`: Fourchette de montant d'investissement
- `message`: Message de l'utilisateur
- `to_name`: Destinataire (GHADIAS Team)

### Formulaire d'onboarding (OnboardingPage)
- `from_name`: Nom complet de l'utilisateur
- `from_email`: Email de l'utilisateur
- `phone`: Numéro de téléphone
- `country`: Pays de résidence
- `investment_amount`: Montant d'investissement
- `investment_timeline`: Timeline d'investissement
- `experience`: Expérience en investissement
- `motivation`: Motivation pour rejoindre
- `questions`: Questions de l'utilisateur
- `to_name`: Destinataire (GHADIAS Team)

## Plan gratuit EmailJS
- 200 emails par mois
- 50 formulaires
- 2 templates email
- Support par email

C'est suffisant pour démarrer le projet GHADIAS !

## Migration vers Mailjet (si nécessaire)
Si le projet grandit et que vous avez besoin de plus de capacités, vous pouvez migrer vers Mailjet :
- 6,000 emails par mois (gratuit)
- Nécessitera un backend pour sécuriser les clés API
- Plus de fonctionnalités avancées

Pour l'instant, EmailJS est parfait pour vos besoins actuels.
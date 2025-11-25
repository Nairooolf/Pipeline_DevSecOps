# TD DevSecOps

Petit projet où on devait prendre une appli Node.js vulnérable et mettre un pipeline DevSecOps dessus avec GitHub Actions.

Le pipeline fait :
- build docker
- semgrep (SAST)
- npm audit (SCA)
- gitleaks (secrets)
- trivy (scan de l’image)
- rapport final

Au début tout cassait (secrets en dur, dépendances vulnérables, Dockerfile pas sécurisé, etc).

J’ai corrigé :
- mise à jour des dépendances
- ajout helmet, rate limit, validation
- suppression des secrets
- ajout .env.example + GitHub Secrets
- Dockerfile en node:22-alpine avec user non-root
- ajout du package-lock.json

Maintenant tout est vert dans GitHub Actions.


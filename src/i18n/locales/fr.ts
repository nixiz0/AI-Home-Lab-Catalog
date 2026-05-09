import type { Dictionary } from "../types";

export const fr = {
  "header.source": "Source",
  "nav.label": "Navigation principale",
  "nav.catalog": "Catalogue",
  "nav.advanced": "Lab ingenieur IA",
  "footer.tagline": "Curate par Initium pour les builders IA locaux et prives.",
  "footer.social.label": "Social",
  "footer.social.youtube": "YouTube",
  "footer.social.instagram": "Instagram",
  "footer.social.linkedin": "LinkedIn",
  "hero.eyebrow": "Guilde IA locale privee",
  "hero.subtitle":
    "Explorez une carte fiable et curatee d'outils IA open source ou auto-heberges pour un home lab prive : chat, serveurs d'inference, voix, images, automatisations, RAG et frameworks d'agents.",
  "hero.primaryAction": "Explorer le catalogue",
  "hero.secondaryAction": "Chercher un outil",
  "hero.visual.status": "Lab en ligne",
  "hero.visual.private": "Prive",
  "hero.visual.open": "Stack open",
  "hero.visual.selfhost": "Auto-heberge",
  "search.placeholder": "Rechercher projets, tags, licences ou besoins...",
  "search.label": "Rechercher dans le catalogue IA local",
  "stats.label": "Statistiques du catalogue",
  "stats.projects": "Projets",
  "stats.favorites": "Favoris",
  "stats.languages": "Langues",
  "stats.licenseAware": "Licences visibles",
  "stats.yes": "Oui",
  "catalog.eyebrow": "Repertoire",
  "catalog.title": "Projets IA locaux",
  "catalog.results": "resultats",
  "catalog.helper": "Filtrez par categorie, cherchez par besoin et gardez vos favoris localement dans ce navigateur.",
  "filters.favorites": "Favoris",
  "filters.reset": "Reinitialiser",
  "empty.title": "Aucun projet correspondant",
  "empty.description": "Essayez un autre mot-cle ou reinitialisez la categorie et le filtre favoris.",
  "empty.action": "Afficher tous les projets",
  "card.bestFor": "Ideal pour",
  "card.license": "Licence",
  "card.commercial": "Commercial",
  "card.links.visit": "Visiter",
  "card.links.repo": "Repo",
  "card.links.docs": "Docs",
  "card.links.android": "Android",
  "card.links.ios": "iOS",
  "card.favorite.add": "Ajouter aux favoris",
  "card.favorite.remove": "Retirer des favoris",
  "category.all": "Tout",
  "category.apps": "Apps",
  "category.mobile": "Mobile",
  "category.models": "Modeles",
  "category.servers": "Serveurs IA",
  "category.images": "Images",
  "category.workflows": "Agents & workflows",
  "openness.open-source": "Open source",
  "openness.source-available": "Code disponible",
  "openness.proprietary-free": "Proprietaire gratuit",
  "openness.model-license": "Licence modele",
  "commercial.friendly": "Usage commercial OK",
  "commercial.caution": "Obligations a verifier",
  "commercial.restricted": "Usage restreint",
  "commercial.proprietary": "Gratuit au travail",
  "advanced.eyebrow": "Lab technique",
  "advanced.title": "Lab ingenieur IA",
  "advanced.subtitle":
    "Une carte ciblee pour data scientists et ingenieurs IA qui construisent des experiences locales, des donnees reproductibles, des boucles d'entrainement, des prototypes LLM et des workflows d'evaluation.",
  "advanced.snapshot.title": "Stack lab",
  "advanced.snapshot.resources": "Ressources",
  "advanced.snapshot.open": "Open source",
  "advanced.snapshot.openValue": "La plupart",
  "advanced.snapshot.local": "Pret local",
  "advanced.snapshot.localValue": "Oui",
  "advanced.snapshot.updated": "Verifie",
  "advanced.flow.eyebrow": "Ordre de build",
  "advanced.flow.title": "Un workflow IA local pratique",
  "advanced.flow.helper": "Commencez par notebooks et donnees, passez aux modeles, puis ajoutez tracking, versioning, scale et comparaison.",
  "advanced.flow.notebooks.title": "Demarrer en notebooks",
  "advanced.flow.notebooks.body": "Utiliser des workspaces Python interactifs pour explorer, presenter et rendre les experiences reproductibles.",
  "advanced.flow.data.title": "Explorer les donnees",
  "advanced.flow.data.body": "Charger des fichiers, interroger des datasets locaux et preparer embeddings ou recherche vectorielle pour le RAG.",
  "advanced.flow.model.title": "Entrainer les bases",
  "advanced.flow.model.body": "Utiliser ML classique, boosting et deep learning la ou chacun correspond au probleme.",
  "advanced.flow.llm.title": "Prototyper des systemes LLM",
  "advanced.flow.llm.body": "Connecter bibliotheques de modeles, vector stores, comparaisons et visualisations pour apps IA locales.",
  "advanced.flow.opsEval.title": "Tracer et evaluer",
  "advanced.flow.opsEval.body": "Enregistrer les runs, tuner les parametres, scaler les workloads et comparer le comportement des modeles.",
  "advanced.flow.visualization.title": "Visualiser les resultats",
  "advanced.flow.visualization.body": "Transformer metriques, distributions, erreurs et sorties de modeles en figures lisibles.",
  "advanced.directory.eyebrow": "Repertoire avance",
  "advanced.directory.title": "Outils pour labs IA techniques",
  "advanced.directory.helper": "Filtrez par couche de stack, cherchez par tache et ouvrez les docs, repos et references officiels.",
  "advanced.search.label": "Rechercher dans le lab ingenieur IA",
  "advanced.search.placeholder": "Rechercher bibliotheques, taches, licences ou couches de stack...",
  "advanced.filters.label": "Filtres de ressources avancees",
  "advanced.card.bestFor": "Ideal pour",
  "advanced.empty.title": "Aucune ressource correspondante",
  "advanced.empty.description": "Essayez un autre mot-cle ou reinitialisez les filtres techniques.",
  "advanced.category.all": "Tout",
  "advanced.category.notebooks": "Notebooks",
  "advanced.category.data": "Donnees & vecteurs",
  "advanced.category.modeling": "Modelisation",
  "advanced.category.opsEval": "Ops & eval",
  "advanced.category.visualization": "Visualisation",
  "advanced.category.llm": "LLM",
  "advanced.resource.numpy.summary":
    "Base du Python numerique avec tableaux rapides, algebre lineaire, broadcasting et structures proches des tenseurs utilisees par l'ecosysteme.",
  "advanced.resource.numpy.fit": "Maths de base, manipulation de tableaux, preprocessing vectorise et glue code derriere la plupart des stacks ML Python.",
  "advanced.resource.pandas.summary":
    "Toolkit DataFrame pour nettoyer, joindre, agreger, reshaper et exporter des donnees structurees depuis CSV, SQL, Parquet, Excel et APIs.",
  "advanced.resource.pandas.fit": "ETL lisible, feature engineering, series temporelles et analyse exploratoire sur datasets moyens.",
  "advanced.resource.polars.summary":
    "Moteur DataFrame en Rust avec execution lazy, optimisation de requetes, streaming et fortes performances pour pipelines analytiques.",
  "advanced.resource.polars.fit": "Transformations locales rapides sur donnees tabulaires plus grandes quand pandas devient lent ou gourmand en memoire.",
  "advanced.resource.duckdb.summary":
    "Base SQL analytique embarquee pour requeter fichiers locaux, Parquet et donnees in-process sans serveur de base de donnees.",
  "advanced.resource.duckdb.fit": "OLAP local, inspection de datasets, extraction de features et exploration SQL dans notebooks ou scripts.",
  "advanced.resource.jupyterlab.summary":
    "Workspace navigateur pour notebooks, terminaux, editeurs, graphiques et experiences interactives de data science.",
  "advanced.resource.jupyterlab.fit": "Recherche iterative, enseignement, debug et prototypes locaux rapides avant de passer le code en package.",
  "advanced.resource.marimo.summary":
    "Notebook Python reactif stocke en pur Python, avec SQL, execution deterministe, deploiement en app et workflows compatibles Git.",
  "advanced.resource.marimo.fit": "Notebooks reproductibles, petites apps internes, experiences explicables et travail IA versionne.",
  "advanced.resource.qdrant.summary":
    "Base vectorielle et moteur de recherche vectorielle open source pour embeddings, recherche semantique, recherche hybride, recommandations et RAG.",
  "advanced.resource.qdrant.fit": "Stockage vectoriel local ou auto-heberge quand le lab doit faire du retrieval sur documents, images ou collections d'embeddings.",
  "advanced.resource.scikitLearn.summary":
    "Toolkit ML Python essentiel pour preprocessing, selection de modeles, regression, classification, clustering et metriques.",
  "advanced.resource.scikitLearn.fit": "Baselines solides, ML tabulaire, workflows interpretables, pipelines et evaluation avant le deep learning.",
  "advanced.resource.xgboost.summary":
    "Bibliotheque de gradient boosting tres optimisee pour ensembles d'arbres precis en local et environnements distribues.",
  "advanced.resource.xgboost.fit": "Modelisation tabulaire competitive, ranking, prediction structuree et baselines de haute qualite.",
  "advanced.resource.lightgbm.summary":
    "Framework de gradient boosting rapide avec entrainement efficace, arbres histogrammes, ranking et fortes performances tabulaires.",
  "advanced.resource.lightgbm.fit": "Gros datasets tabulaires, iterations rapides, taches de ranking et arbres boostes economes en ressources.",
  "advanced.resource.optuna.summary":
    "Framework d'optimisation d'hyperparametres avec espaces define-by-run, pruning, samplers, dashboards et integrations d'experiences.",
  "advanced.resource.optuna.fit": "Tuning automatique pour scikit-learn, boosting, deep learning et sweeps d'experiences locales.",
  "advanced.resource.pytorch.summary":
    "Framework deep learning flexible avec graphe dynamique, acceleration GPU, autograd et large ecosysteme recherche-production.",
  "advanced.resource.pytorch.fit": "Reseaux neuronaux custom, fine-tuning, vision, NLP, LLM et workflows tres orientes recherche.",
  "advanced.resource.tensorflow.summary":
    "Framework deep learning de Google avec Keras, chemins de deploiement production, TensorBoard et options edge/mobile.",
  "advanced.resource.tensorflow.fit": "Entrainement oriente production, workflows Keras, serving, TensorBoard et chemins TensorFlow Lite.",
  "advanced.resource.jax.summary":
    "Bibliotheque de calcul haute performance avec transforms composables pour JIT, vectorisation, differentiation automatique et scale accelerateur.",
  "advanced.resource.jax.fit": "Code recherche, programmation differentiable, experiences TPU/GPU et kernels acceleres au style NumPy.",
  "advanced.resource.transformers.summary":
    "Framework de definition de modeles pour transformers preentraines texte, vision, audio, video et multimodaux en training et inference.",
  "advanced.resource.transformers.fit": "Utiliser, fine-tuner, comparer et packager des LLM et modeles multimodaux de l'ecosysteme Hugging Face.",
  "advanced.resource.mlflow.summary":
    "Plateforme open source d'AI engineering pour tracer experiences, gerer modeles, evaluer apps LLM, prompts, traces et workflows production.",
  "advanced.resource.mlflow.fit": "Tracking de runs, registry de modeles, historique local d'experiences, evaluation LLM et developpement IA reproductible.",
  "advanced.resource.ray.summary":
    "Framework de calcul IA distribue pour scaler taches Python, datasets, entrainement, tuning, reinforcement learning et serving.",
  "advanced.resource.ray.fit": "Scaler les workloads locaux vers workstation ou cluster quand les experiences demandent plus de CPU, GPU ou concurrence.",
  "advanced.resource.arena.summary":
    "Plateforme publique de comparaison de modeles, anciennement LMArena et Chatbot Arena, basee sur preferences pairwise et leaderboards.",
  "advanced.resource.arena.fit": "Verifier comment modeles frontier et open se comparent sur vrais prompts avant de choisir quoi lancer ou tester localement.",
  "advanced.resource.matplotlib.summary":
    "Bibliotheque Python centrale pour creer des figures statiques, animees et interactives de qualite publication dans notebooks et scripts.",
  "advanced.resource.matplotlib.fit": "Graphiques custom, plots de metriques, rapports d'experiences et controle precis du layout et du style.",
  "advanced.resource.seaborn.summary":
    "Bibliotheque de visualisation statistique haut niveau construite sur Matplotlib et naturelle avec les DataFrames pandas.",
  "advanced.resource.seaborn.fit": "Graphiques exploratoires rapides pour distributions, relations, categories, regressions et diagnostics de modeles.",
  "advanced.resource.awesomeGenerativeAi.summary":
    "Grande liste GitHub curatee de projets, services, modeles, ressources d'apprentissage et listes de decouverte en IA generative.",
  "advanced.resource.awesomeGenerativeAi.fit": "Decouverte large pour trouver nouveaux modeles, outils, references et inspiration hors d'une stack fixe.",
  "advanced.resource.llmVisualization.summary":
    "Visualisation 3D interactive d'un transformer de style GPT en inference, utile pour comprendre attention, couches et flux de tokens.",
  "advanced.resource.llmVisualization.fit": "Apprendre visuellement les internes des transformers avant implementation, fine-tuning ou explication de systemes LLM.",
  "project.openWebui.summary":
    "Plateforme IA auto-hebergee extensible avec support Ollama et API compatibles OpenAI, RAG integre et interface web utilisable hors ligne.",
  "project.openWebui.needs":
    "Une interface navigateur soignee pour le chat local, le changement de modele, les documents et les petits deploiements d'equipe.",
  "project.openWebui.licenseNote":
    "Les versions recentes gardent un usage de style permissif mais ajoutent des obligations de conservation de marque; le code v0.6.5 reste BSD-3-Clause.",
  "project.googleAiEdgeGallery.summary":
    "Application mobile open source de Google AI Edge pour executer Gemma 4 et d'autres modeles optimises LiteRT directement sur Android et iPhone.",
  "project.googleAiEdgeGallery.needs":
    "Tester un chat Gemma local et prive, des prompts, des questions sur images, la transcription audio et des benchmarks on-device sans serveur home lab.",
  "project.googleAiEdgeGallery.licenseNote":
    "Le code de l'application est Apache-2.0; les modeles Gemma ou tiers telecharges gardent leurs propres conditions et restrictions d'usage.",
  "project.ollama.summary":
    "Executez des LLM locaux comme Llama, Mistral, Gemma, Qwen et DeepSeek via un runtime local et une API simples.",
  "project.ollama.needs": "Le point de depart le plus simple pour lancer et servir des LLM sur laptop, workstation ou petit serveur.",
  "project.ollama.licenseNote": "Application sous licence MIT; verifiez toujours la licence de chaque modele telecharge.",
  "project.vllm.summary":
    "Moteur d'inference et de serving LLM rapide et efficace en memoire, optimise GPU, batching et API compatible OpenAI.",
  "project.vllm.needs": "Serving haut debit sur materiel CUDA/ROCm quand la performance et la concurrence comptent.",
  "project.vllm.licenseNote": "Licence Apache-2.0, generalement favorable aux usages logiciels commerciaux.",
  "project.lmStudio.summary":
    "Application desktop pour decouvrir, telecharger, discuter avec et servir des LLM locaux sur Windows, macOS et Linux.",
  "project.lmStudio.needs": "Un flux desktop accessible avec serveur local et tres peu de configuration.",
  "project.lmStudio.licenseNote":
    "Gratuit pour usage personnel et professionnel, mais l'application est proprietaire; les licences des modeles charges restent separees.",
  "project.anythingLlm.summary":
    "Application LLM complete avec chat local-first, RAG, indexation de fichiers, agents, multi-modeles, desktop ou Docker.",
  "project.anythingLlm.needs": "Un espace prive complet pour documents, chat d'equipe, outils agents et fournisseurs personnalises.",
  "project.anythingLlm.licenseNote": "Projet sous licence MIT avec conditions favorables aux usages commerciaux.",
  "project.jan.summary":
    "Alternative open source et privee a ChatGPT qui fonctionne hors ligne et peut exposer une API locale compatible OpenAI.",
  "project.jan.needs": "Un assistant desktop propre pour modeles locaux, chat prive et usage quotidien simple.",
  "project.jan.licenseNote": "Licence Apache-2.0, generalement favorable aux usages commerciaux.",
  "project.verba.summary":
    "Chatbot RAG communautaire base sur Weaviate pour interroger des documents localement ou avec des fournisseurs externes choisis.",
  "project.verba.needs": "Une interface RAG specialisee si Weaviate fait deja partie du home lab.",
  "project.verba.licenseNote": "Licence BSD-3-Clause; fournisseurs et modeles peuvent ajouter des conditions separees.",
  "project.whisper.summary": "Modele OpenAI de transcription et traduction speech-to-text multilingue.",
  "project.whisper.needs": "Transcription locale, sous-titres, notes de reunion et experiences de reconnaissance vocale.",
  "project.whisper.licenseNote": "Le code et les poids de Whisper sont publies sous licence MIT.",
  "project.coqui.summary": "Toolkit text-to-speech de qualite avec modeles multilingues et workflows de clonage vocal.",
  "project.coqui.needs": "Experiences TTS locales, recherche en synthese vocale et prototypes non commerciaux de clonage vocal.",
  "project.coqui.licenseNote":
    "Le code du toolkit est MPL-2.0, mais XTTS-v2 et ses sorties de clonage vocal sont sous CPML non commerciale.",
  "project.fooocus.summary": "Application SDXL simple d'utilisation, orientee qualite d'image avec peu de reglage de prompt.",
  "project.fooocus.needs": "Un generateur d'images hors ligne simple pour obtenir vite des resultats sans workflow par noeuds.",
  "project.fooocus.licenseNote":
    "Application GPL-3.0; les sorties de modeles et les modeles inclus ou telecharges doivent etre verifies separement.",
  "project.stableDiffusion.summary": "Famille de modeles de diffusion texte-vers-image pour generer des images localement.",
  "project.stableDiffusion.needs": "La couche modele de base derriere de nombreuses interfaces et workflows d'images locaux.",
  "project.stableDiffusion.licenseNote":
    "CreativeML Open RAIL-M permet de nombreux usages mais inclut des restrictions d'usage responsable.",
  "project.comfyui.summary":
    "Interface par noeuds, API et backend puissants pour construire des workflows avances de diffusion et d'IA generative.",
  "project.comfyui.needs": "Controle fin des pipelines d'image, workflows reutilisables, noeuds custom et automatisation via API locale.",
  "project.comfyui.licenseNote":
    "Application GPL-3.0; checkpoints de modeles et noeuds custom peuvent avoir leurs propres conditions.",
  "project.n8n.summary":
    "Plateforme d'automatisation pour connecter API, donnees et outils IA dans des agents logiques avec peu de code.",
  "project.n8n.needs": "Automatisation no-code/low-code, workflows IA, integrations et processus locaux planifies.",
  "project.n8n.licenseNote":
    "Licence fair-code source-available autorisant beaucoup d'usages internes mais restreignant la vente de produits derives ou d'acces heberge.",
  "project.crewai.summary":
    "Framework Python multi-agent pour coordonner des agents IA avec roles, taches, outils, memoire et logique collaborative.",
  "project.crewai.needs": "Equipes d'agents codees par developpeur, avec roles, taches et orchestration explicites.",
  "project.crewai.licenseNote": "Framework sous licence MIT avec conditions favorables aux usages commerciaux.",
  "project.langchain.summary":
    "Toolkit pour apps et agents LLM avec integrations de modeles, outils, chaines, memoire et composants RAG.",
  "project.langchain.needs": "Framework developpeur generaliste pour connecter des modeles aux donnees et appels d'outils.",
  "project.langchain.licenseNote": "Bibliotheque MIT; LangSmith et les services heberges sont des produits separes.",
  "project.langgraph.summary":
    "Framework d'orchestration bas niveau pour agents durables, stateful et longs, representes comme des graphes.",
  "project.langgraph.needs": "Workflows agents de type production avec etat, reprises, branches et validation humaine.",
  "project.langgraph.licenseNote": "Bibliotheque MIT; les services commerciaux LangChain sont separes.",
} satisfies Dictionary;

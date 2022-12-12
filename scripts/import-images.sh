#!/bin/bash

# Définissez le nom du dossier contenant les images
IMAGE_FOLDER="../src/images"


# Itérez à travers les sous-dossiers dans le dossier d'images
  for subdir in $(find $IMAGE_FOLDER -type d); do

  SUBDIR_NAME=$(basename $subdir)

  # Définissez le nom du fichier de constantes dans lequel les imports seront enregistrés
  CONSTANTS_FILE="../src/images/images-$SUBDIR_NAME.js"

  if [ "$SUBDIR_NAME" != "images" ]; then

    # Afficher le dossier en cours de traitements
    echo "Traitement du dossier $SUBDIR_NAME"

    echo >"$CONSTANTS_FILE"

    # Créer un fichier de constantes s'il n'existe pas déjà
    touch "$CONSTANTS_FILE"

    # Itérez à travers les images dans le dossier d'images
    for image in $subdir/*.png; do
      # Extraire le nom du fichier de l'image (sans le chemin)
      image_name=$(basename -s .png $image)

      # Ajoutez une ligne d'import pour cette image au fichier de constantes
      echo "import $image_name from './$SUBDIR_NAME/$image_name.png';" >>"$CONSTANTS_FILE"
    done

    echo "" >>"$CONSTANTS_FILE"

    CONSTANTE_NAME="IMAGES_$(basename $subdir | tr '[:lower:]' '[:upper:]')"

    # Ajoutez une ligne pour déclarer un objet d'imports vide
    echo "export const $CONSTANTE_NAME = {" >>"$CONSTANTS_FILE"

    for image in $subdir/*.png; do
      # Extraire le nom du fichier de l'image (sans le chemin)
      image_name=$(basename -s .png $image)

      # Ajoutez une ligne d'import pour cette image au fichier de constantes
      echo "$image_name," >>"$CONSTANTS_FILE"
    done

    # Ajoutez une ligne pour exporter l'objet d'imports
    echo "}" >>"$CONSTANTS_FILE"
  fi
done

#!/bin/bash


echo "Restaurando base de datos..."


FILES=(system.bson users.bson lists.bson forms.bson post_types.bson)

cd /data_restore

for file in "${FILES[@]}"
do
    if test -f "$file"; then
        mongorestore --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD --authenticationDatabase admin --db $MONGO_INITDB_DATABASE $file
    fi
done

echo "Base de datos restaurada"
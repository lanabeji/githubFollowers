# githubFollowers

GithubFollowers es una página web que permite ver las personas a las que está siguiendo un usuario de github, para esto se debe entrar el siguiente enlace:
  https://gitfollowers.herokuapp.com/getAllFollowers
  
  
  ![My image](https://github.com/lnbello10/githubFollowers/blob/master/imagen.jpg)

  
Lo que se va a encontrar es un listado de las personas que son seguidas por los usuarios que se han buscado anteriormente. Es decir, cada vez que se busca a un usuario de github, las personas a las que sigue son guardadas en un arreglo global. 

Para incluir a estas personas a la lista se debe usar el siguiente enlace

  https://gitfollowers.herokuapp.com/getFollowers/:user

Esto se hizo con el fin de ver a que personas sigue alguien sin tener que entrar directamente a la cuenta de la persona. 

Adición creativa:
Usa mongo para escribir en la base de datos cada vez que se buscan las personas que sigue de un usuario y tambien para encontrar todos los seguidores de los usuarios que se han buscado. Esta base de datos es especial porque se encuentra en mongo atlas y permite monitorear las consultas o escrituras (conexiones) que se hacen a la base de datos, tal como se muestra a continuación:

![My image](https://github.com/lnbello10/githubFollowers/blob/master/mongo atlas.jpg)


/getAllFollowers Todos los seguidores de los usuarios que se han buscado hasta el momento. Leer de mongo

/getFollowers/:user Da los seguidores del usuario y los guarda en mongo.


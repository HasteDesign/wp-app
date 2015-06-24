<?php
/**
 * As configurações básicas do WordPress.
 *
 * Esse arquivo contém as seguintes configurações: configurações de MySQL, Prefixo de Tabelas,
 * Chaves secretas, Idioma do WordPress, e ABSPATH. Você pode encontrar mais informações
 * visitando {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. Você pode obter as configurações de MySQL de seu servidor de hospedagem.
 *
 * Esse arquivo é usado pelo script ed criação wp-config.php durante a
 * instalação. Você não precisa usar o site, você pode apenas salvar esse arquivo
 * como "wp-config.php" e preencher os valores.
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar essas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'wpapp');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'root');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', '');

/** nome do host do MySQL */
define('DB_HOST', 'localhost');

/** Conjunto de caracteres do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8');

/** O tipo de collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Você pode alterá-las a qualquer momento para desvalidar quaisquer cookies existentes. Isto irá forçar todos os usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'a{i@f|tk@])Ofr#1@LW]$Wz/%rzq|hppd>Zp|DB!uVtc!P;{{x##Z0HF9[#e/R4R');
define('SECURE_AUTH_KEY',  '++^MQ`|Y^(+rA|R)dG<?ZzCqr&u-mTx+D#=RH*iB=BQO~5hJ|D-41bR=9=5L)FiP');
define('LOGGED_IN_KEY',    ':B5V,1Ag|uA>{y]/?3DYogqH|tFF&|sVf2;UChSumBu(Y^l<MEdcgtS_uk3pM-WW');
define('NONCE_KEY',        '@yXBMsOBmzNmkfX0]3|JK7YN7Y=9@4oQx|/-:dQv:G)T&1 8++(,<Eez,<|<*y+9');
define('AUTH_SALT',        ']5u@9)@(H^2#c$FBIVZ/I` ,v)#3F~K]q>oA*GkARk{g|kZnZT<,:C}9F_P0Zhz%');
define('SECURE_AUTH_SALT', 'mL.>v5@^]vFHk%&vieQ@$S+I~$( MEpTpE>RNuo)roo>n:i!pLDV`x$Hv{3)MI~C');
define('LOGGED_IN_SALT',   'gBmw.+]C-?)_)[_*@G `F@,MF(S,n0f%$r/rk:LzWSVC+V`&GM%^1LWtbkmUiCex');
define('NONCE_SALT',       'oR6u`SN3-Wmg0%o`V-++-8s:Joy.0bQiX~ZD4]!TG4ng,NK7i)zxZ;dFh$ul-h&~');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der para cada um um único
 * prefixo. Somente números, letras e sublinhados!
 */
$table_prefix  = 'app_';


/**
 * Para desenvolvedores: Modo debugging WordPress.
 *
 * altere isto para true para ativar a exibição de avisos durante o desenvolvimento.
 * é altamente recomendável que os desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 */
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis do WordPress e arquivos inclusos. */
require_once(ABSPATH . 'wp-settings.php');

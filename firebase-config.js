/* みまもりグループ（家族とのリアルタイム同期）の設定ファイル。
   ここにFirebaseの設定を貼り付けると同期が有効になる。
   null のままなら端末内保存のみのローカルモードで動く。
   セットアップ手順は README.md の「同期のセットアップ」を参照。 */
window.MAMORIWA_FIREBASE_CONFIG = null;

/* 例（Firebaseコンソールで発行されたものに置き換える）：
window.MAMORIWA_FIREBASE_CONFIG = {
  apiKey: "AIza....",
  authDomain: "mamoriwa-xxxxx.firebaseapp.com",
  projectId: "mamoriwa-xxxxx",
  storageBucket: "mamoriwa-xxxxx.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxx"
};
*/

import imgOrzechowoCzekoBananowe from "../images/food-images/orzechowo_czeko_bananowe.jpg";
import imgSuszoneOwoce from "../images/food-images/suszone_owoce.jpg";
import imgDaktylowy from "../images/food-images/daktylowy.jpg";
import imgRyżPreparowany from "../images/food-images/ryz_preparowany.jpg";
import imgFigoweBatoniki from "../images/food-images/figowe_batoniki.jpg";
import imgKawowoKakaowe from "../images/food-images/kawowo_kakaowe.jpg";
import imgKokosowoMigdalkowe from "../images/food-images/kokosowo_migdalkowe.jpg";
import imgOtrebowe from "../images/food-images/otrebowe.jpg";
import imgYerbaMate from "../images/food-images/yerba_mate.jpg";
import imgWszystko from "../images/food-images/wszystko.jpg";
import imgBatony from "../images/food-images/batony_baner.jpg";
import imgPlackiBananowe from "../images/food-images/placki_bananowe.jpg";
import imgChlebekBananowy from "../images/food-images/chlebek_bananowy.jpg";
import imgPlackiBananoweCzekoladowe from "../images/food-images/placki_bananowe_czekoladowe.jpg";
import imgSernikBezCukru from "../images/food-images/sernik_bez_cukru.jpg";
import imgKuleMocy from "../images/food-images/imgKuleMocy.png";
import imgKokosowyChiaPudding from "../images/food-images/imgKokosowyChiaPudding.png";
import imgBolognese_tofu from "../images/food-images/bolognese_tofu.png";
import imgShake_owocowy_z_bananem_i_jagodami from "../images/food-images/shake_owocowy_z_bananem_i_jagodami.jpg";
import imgChia_pudding_dyniowy from "../images/food-images/chia_pudding_dyniowy.jpeg";
import imgMakaron_z_dynia_szpinakiem_i_serem_feta from "../images/food-images/makaron_z_dynia_szpinakiem_i_serem_feta.jpeg";
import imgZapiekanka_makaronowa_z_wazywami_i_serem from "../images/food-images/zapiekanka_makaronowa_z_wazywami_i_serem.jpeg";
import imgShakeCzekoladowy from "../images/food-images/shake-czekolada.jpeg";
import imgZupa_ŁUT from "../images/food-images/Zupa_ŁUT.jpg";
import imgPesto_pietruszkowe from "../images/food-images/pesto_pietruszkowe.jpg";
import imgShake_mango_pomarancza from "../images/food-images/shakez-mango-pomarancza.jpeg";
import imgShake_zielony_z_szpinakiem_i_kiwi from "../images/food-images/shake_zielony_z_szpinakiem_i_kiwi.jpg";
import imgBulki_orkiszowe from "../images/food-images/bulki_orkiszowe.jpg";
import imgWoda_kokosowa from "../images/food-images/woda_kokosowa.jpg";
import imgDomowy_izotonik_cytrusowy from "../images/food-images/domowy_izotonik_cytrusowy.jpg";
import imgNapoj_mietowo_cytrynowy from "../images/food-images/napoj_mietowo_cytrynowy.jpg";
import imgHerbata_hibiskus_cytryna from "../images/food-images/herbata_hibiskus_cytryna.jpg";
import imgNapoj_miodowo_imbirowy from "../images/food-images/napoj_miodowo_imbirowy.jpg";
import imgBulki_pszenno_orkiszowe from "../images/food-images/bulki_pszenno_orkiszowe.jpg";
import imgPasta_bezjajeczna_ze_straczkow from "../images/food-images/pasta_bezjajeczna_ze_straczkow.jpg";
import imgChleb_pszenno_orkiszowy from "../images/food-images/chleb_pszenno_orkiszowy.jpg";
import imgOwsianka_pomaranczowo_bananowa from "../images/food-images/owsianka_pomaranczowo_bananowa.jpg";
import imgMakaron_w_sosie_z_soczewicy_z_kurczakiem from "../images/food-images/makaron_w_sosie_z_soczewicy_z_kurczakiem.jpg";
import imgZapiekanka_z_kaszy_gryczanej from "../images/food-images/zapiekanka_z_kaszy_gryczanej.jpg";
import imgMakaron_z_pesto_mozzarellą_suszonymi_pomidorami from "../images/food-images/makaron_z_pesto_mozzarellą_suszonymi_pomidorami.jpg";
import imgMakaron_z_tuńczykiem_i_oliwkami from "../images/food-images/makaron_z_tuńczykiem_i_oliwkami.jpg";

// Mapowanie identyfikatorów obrazków na zaimportowane obrazy
const imageMap = {
   orzechowo_czeko_bananowe: imgOrzechowoCzekoBananowe,
   suszone_owoce: imgSuszoneOwoce,
   daktylowy: imgDaktylowy,
   ryz_preparowany: imgRyżPreparowany,
   figowe_batoniki: imgFigoweBatoniki,
   kawowo_kakaowe: imgKawowoKakaowe,
   kokosowo_migdalkowe: imgKokosowoMigdalkowe,
   otrebowe: imgOtrebowe,
   yerba_mate: imgYerbaMate,
   wszystko: imgWszystko,
   batony_baner: imgBatony,
   placki_bananowe: imgPlackiBananowe,
   chlebek_bananowy: imgChlebekBananowy,
   placki_bananowe_czekoladowe: imgPlackiBananoweCzekoladowe,
   sernik_bez_cukru: imgSernikBezCukru,
   kule_mocy: imgKuleMocy,
   bolognese_tofu: imgBolognese_tofu,
   kokosowy_chia_pudding: imgKokosowyChiaPudding,
   shake_owocowy_z_bananem_i_jagodami: imgShake_owocowy_z_bananem_i_jagodami,
   chia_pudding_dyniowy: imgChia_pudding_dyniowy,
   makaron_z_dynia_szpinakiem_i_serem_feta:
      imgMakaron_z_dynia_szpinakiem_i_serem_feta,
   zapiekanka_makaronowa_z_wazywami_i_serem:
      imgZapiekanka_makaronowa_z_wazywami_i_serem,
   shake_czekoladowy_z_maslem_orzechowym: imgShakeCzekoladowy,
   Zupa_ŁUT: imgZupa_ŁUT,
   pesto_pietruszkowe: imgPesto_pietruszkowe,
   shake_tropikalny_z_mango_i_pomarańczą: imgShake_mango_pomarancza,
   shake_zielony_z_szpinakiem_i_kiwi: imgShake_zielony_z_szpinakiem_i_kiwi,
   bulki_orkiszowe: imgBulki_orkiszowe,
   woda_kokosowa: imgWoda_kokosowa,
   domowy_izotonik_cytrusowy: imgDomowy_izotonik_cytrusowy,
   napoj_mietowo_cytrynowy: imgNapoj_mietowo_cytrynowy,
   herbata_hibiskus_cytryna: imgHerbata_hibiskus_cytryna,
   napoj_miodowo_imbirowy: imgNapoj_miodowo_imbirowy,
   bulki_pszenno_orkiszowe: imgBulki_pszenno_orkiszowe,
   pasta_bezjajeczna_ze_straczkow: imgPasta_bezjajeczna_ze_straczkow,
   chleb_pszenno_orkiszowy: imgChleb_pszenno_orkiszowy,
   owsianka_pomaranczowo_bananowa: imgOwsianka_pomaranczowo_bananowa,
   makaron_w_sosie_z_soczewicy_z_kurczakiem:
      imgMakaron_w_sosie_z_soczewicy_z_kurczakiem,
   zapiekanka_z_kaszy_gryczanej: imgZapiekanka_z_kaszy_gryczanej,
   makaron_z_pesto_mozzarellą_suszonymi_pomidorami:
      imgMakaron_z_pesto_mozzarellą_suszonymi_pomidorami,
   makaron_z_tuńczykiem_i_oliwkami: imgMakaron_z_tuńczykiem_i_oliwkami,
};

export default imageMap;

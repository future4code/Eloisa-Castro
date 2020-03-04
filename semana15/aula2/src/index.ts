import { Dessert } from "./dessert";
import { SaltyDish } from "./saltydish";
import { Dish } from "./dish";

const allDishes: Dish[] = [] 

const brigadeiro = new Dessert(100, 20, ["leite condensado", "chocolate"], 100, 10);
allDishes.push(brigadeiro)

const pudim = new Dessert(150, 30, ["leite condensado", "ovos", "leite"], 200, 10);
allDishes.push(pudim)

const feijoada = new SaltyDish(100, 20, ["feijão preto", "linguiça", "costela de porco"], 100);
allDishes.push(feijoada)

const carbonara = new SaltyDish(140, 50, ["macarrão", "bacon", "ovo"], 100);
allDishes.push(carbonara)
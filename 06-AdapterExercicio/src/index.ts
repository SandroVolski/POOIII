import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreiosCorreios from "./correios/ICorreiosCorreios";
import Transportadora from "./transportadora/Transportadora";

const entrega : ICorreiosCorreios = new Correios();
entrega.sendCorreios();
entrega.receiveCorreios();

const entrega2 : ICorreiosCorreios = new TransportadoraAdapter(new Transportadora());
entrega2.sendCorreios();
entrega2.receiveCorreios();
import { Socket } from "socket.io";
import Config from '../../models/ModelConfig';
import { TypeConfig } from "../../types/TypeConfig";

export default async function ControllerConfigPut(socket: Socket, id: string, data: Partial<TypeConfig>) {
  try {
    const UpdatedConfig = await Config.update(id, data);
    socket.emit('CONFIG_PUT_RES', {
      title: 'Sucesso',
      message: 'A configuração foi atualizada.',
      data: UpdatedConfig
    });
  } catch (error) {
    socket.emit('CONFIG_PUT_RES', {
      title: 'Erro',
      message: (error as Error).message || 'A ação não pode ser finalizada.',
    });
  }
}

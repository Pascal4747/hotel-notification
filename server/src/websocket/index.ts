import { Server, Socket } from 'socket.io';
import { WebSocketEvent } from 'shared-types';

export const setupWebSocket = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('Client connected');

    // Join table room
    socket.on('join_table', (tableId: number) => {
      socket.join(`table_${tableId}`);
    });

    // Leave table room
    socket.on('leave_table', (tableId: number) => {
      socket.leave(`table_${tableId}`);
    });

    // Handle order updates
    socket.on('order_update', (data: { tableId: number; event: WebSocketEvent; payload: any }) => {
      io.to(`table_${data.tableId}`).emit(data.event, data.payload);
    });

    // Handle messages
    socket.on('new_message', (data: { tableId: number; message: any }) => {
      io.to(`table_${data.tableId}`).emit('message_received', data.message);
    });

    // Handle table status updates
    socket.on('table_status_update', (data: { tableId: number; status: string }) => {
      io.emit('table_status_changed', data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}; 
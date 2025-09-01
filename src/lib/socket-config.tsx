import openSocket from 'socket.io-client';
import { serverHost } from '../export';

export const socket = openSocket(serverHost);
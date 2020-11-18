import { Test } from '@nestjs/testing';

import { AppService, games } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getAllGames', () => {
    it('should return the games', () => {
      expect(service.getAllGames()).toEqual(games);
    });
  });

  describe('getGame', () => {
    it('should return a specific game', () => {
      expect(service.getGame('settlers-in-the-can')).toEqual(games[0]);
    });
  });
});

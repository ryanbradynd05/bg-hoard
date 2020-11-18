import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService, games } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getAllGames', () => {
    it('should return all games', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getAllGames()).toEqual(games);
    });
  });
});

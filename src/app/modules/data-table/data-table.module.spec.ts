import { JSONTableModule } from './data-table.module';

describe('DataTableModule', () => {
  let dataTableModule: JSONTableModule;

  beforeEach(() => {
    dataTableModule = new JSONTableModule();
  });

  it('should create an instance', () => {
    expect(dataTableModule).toBeTruthy();
  });
});

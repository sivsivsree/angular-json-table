import { DataTableModule } from './data-table.module';

describe('DataTableModule', () => {
  let dataTableModule: DataTableModule;

  beforeEach(() => {
    dataTableModule = new DataTableModule();
  });

  it('should create an instance', () => {
    expect(dataTableModule).toBeTruthy();
  });
});

INSERT INTO [dbo].[CtrlBox_In]
    ( 
      [BoxId],
      [Vendor],
      [VendorName],
      [TranDate]  
    )
VALUES 
    (     
        @BoxId,
        @Vendor,
        @VendorName,
        @TranDate
    )


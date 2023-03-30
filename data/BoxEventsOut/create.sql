INSERT INTO [dbo].[CtrlBox_Out]
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

